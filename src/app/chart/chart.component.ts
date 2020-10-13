import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  myDataSets = [{
    name: 'likes',
    points: [
      { x: 10, y: 100 },
      { x: 20, y: 500 }
    ]
  }];

  today = new Date();
  type = 'LineChart';
  chartData: Array<Array<any>> = [
    [new Date(2020, 10, 13, 6, 25), 2],
    [new Date(2020, 10, 13, 6, 45), 15],
    [new Date(2020, 10, 13, 7, 0), 0],
    [new Date(2020, 10, 13, 7, 45), 0],
    [new Date(2020, 10, 13, 8, 25), 20],
    [new Date(2020, 10, 13, 9, 30), 15],
    [new Date(2020, 10, 13, 10, 45), 0],
    [new Date(2020, 10, 13, 12, 45), 0],
    [new Date(2020, 10, 13, 12, 56), 19],
    [new Date(2020, 10, 13, 13, 10), 10],
    [new Date(2020, 10, 13, 14, 25), 2],
    [new Date(2020, 10, 13, 15, 0), 55],
    [new Date(2020, 10, 13, 16, 30), 25],
    [new Date(2020, 10, 13, 18, 25), 33],
    [new Date(2020, 10, 13, 22, 30), 5],
  ];

  options: object = {
    legend: 'none',
    tooltip: { isHtml: true },
    vAxis: {
      textPosition: 'none'
    },
    hAxis: {
      minValue: new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0),
      maxValue: new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 24)
    },
    width: 1000
  };

  constructor() { }

  ngOnInit(): void {
  }

  formatXAxisValue(value: number) {
    return `Value ${value}`;
  }

}
