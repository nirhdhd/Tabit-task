import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() index?: number;
  @Input() values?: any;
  _values: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this._values = this.values.split(',').map((x: string) => parseInt(x));
  }
}
