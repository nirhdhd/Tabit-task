import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    public service: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @ViewChild('playerName') playerName?: ElementRef;

  ngOnInit(): void {}

  start() {
    this.service.playerName = this.playerName?.nativeElement.value;
    console.log('sds:', this.playerName?.nativeElement.value);
    this.router.navigate(['/game']);
  }
}
