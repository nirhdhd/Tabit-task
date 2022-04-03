import { AppService } from '../../app.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FinalScoreDialogComponent } from './final-score-dialog/final-score-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  scoreBoard: string[] = []; // ["shot 1 , shot 2 , result , hasBonus , Result is visable"]
  round: number = 0; // 0-10 11
  shot: number = 1; // 1-2
  finalScore: number = 0;
  finalRoundIndex: number = 0; //0-2

  constructor(
    public sevice: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  get pins() {
    return this.pinsInput.value;
  }

  ngOnInit(): void {
    this.scoreBoard = Array(9).fill('-1,-1,-1,-1,0'); // [shot1,shot2,result,hasbonus,visable]
    this.scoreBoard.push('-1,-1,-1,-1,0,-1');
  }

  pinsInput = new FormControl('', [Validators.max(10), Validators.min(0)]);

  addUser() {
    this.sevice.addUser({
      name: this.sevice.playerName,
      score: this.finalScore,
    });
  }

  throwBall(random: boolean, event: Event) {
    event.preventDefault();
    let round = this.round;

    console.log('round:', round);
    if (round == 10) {
      let current = this.cell_StringToArray(this.scoreBoard[round - 1]);
      this.finalScore = current[2];
      this.openDialog();
      return;
    }

    let current = this.cell_StringToArray(this.scoreBoard[round]);
    let pins: number = parseInt(this.pins);
    let prevStep: number[] = [];

    // Calculation of pins
    if (random) {
      if (this.shot == 2) {
        pins = Math.floor(Math.random() * current[0]);
      } else {
        pins = Math.floor(Math.random() * 11);
      }
    } else {
      if (this.shot == 2) {
        if (current[0] + pins > 10) {
          alert(`you can choose between 0-${10 - current[0]}`);
          return;
        } else {
          pins = parseInt(this.pins);
        }
      }
    }
    if (this.round > 0) {
      prevStep = this.cell_StringToArray(this.scoreBoard[round - 1]);
    }

    if (this.shot == 1) {
      if (pins == 10) {
        current[0] = pins;
        current[3] = 2; //strike
        // update result of prev after this current strike
        if (prevStep.length) {
          current[2] = 10;
          this.updatePrevBonuse(prevStep, current);
          current[2] = current[0] + prevStep[2];
        } else {
          current[2] = 10;
        }
        this.round += 1;
      } else {
        current[0] = pins;
        this.shot = 2;
      }
    } else {
      current[1] = pins;
      if (prevStep.length) {
        current[2] = current[0] + pins + prevStep[2];
      } else {
        current[2] = current[0] + pins;
      }
      if (current[0] + pins == 10) {
        current[3] = 1; //spare
      } else {
        current[4] = 1;
      }

      this.shot = 1;
      this.round += 1;
    }

    if (prevStep.length && prevStep[3] !== 0 && current[3] != 2) {
      this.updatePrevBonuse(prevStep, current);
    }

    this.scoreBoard[round] = this.cell_ArrayToString(current);
  }

  updatePrevBonuse(prev: number[], current: number[]) {
    switch (prev[3]) {
      case 1:
        prev[2] = prev[2] + current[0];
        break;
      case 2:
        if (current[1] == -1) {
          prev[2] = prev[2] + current[0];
        } else {
          prev[2] = prev[2] + current[2];
        }

        break;
    }
    prev[4] = 1;
    prev[3] = 0;

    this.scoreBoard[this.round - 1] = this.cell_ArrayToString(prev);
  }
  cell_StringToArray(str: string) {
    return str.split(',').map((x) => parseInt(x));
  }
  cell_ArrayToString(arr: number[]) {
    let temp = `${arr[0]},${arr[1]},${arr[2]},${arr[3]},${arr[4]}`;
    return temp;
  }
  goBack() {
    this.router.navigate(['/main']);
  }

  openDialog() {
    const timeout = 3000;
    this.finalScore = this.cell_StringToArray(this.scoreBoard[8])[2];
    const dialogRef = this.dialog.open(FinalScoreDialogComponent, {
      data: this.finalScore,
    });

    dialogRef.afterOpened().subscribe(() => {
      this.addUser();
      setTimeout(() => {
        dialogRef.close();
        this.router.navigate(['/score']);
      }, timeout);
    });
  }
}
