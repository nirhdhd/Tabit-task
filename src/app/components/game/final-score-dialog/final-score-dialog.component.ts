import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-final-score-dialog',
  templateUrl: './final-score-dialog.component.html',
  styleUrls: ['./final-score-dialog.component.scss'],
})
export class FinalScoreDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FinalScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
