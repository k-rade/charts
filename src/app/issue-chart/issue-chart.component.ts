import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-chart',
  templateUrl: './issue-chart.component.html',
  styleUrls: ['./issue-chart.component.scss']
})
export class IssueChartComponent implements OnInit {

  myDataSets = [{
    name: 'likes',
    points: [
      { x: 10, y: 100 },
      { x: 20, y: 500 }
    ]
  }];

  today = new Date();
  type = 'Gantt';
  chartData: Array<Array<any>> = [
    ['2014Spring', 'Spring 2014', 'spring',
      new Date(2020, 10, 20), new Date(2020, 10, 22), 1, 45, null],
    ['2014Summer', 'Summer 2014', 'summer',
      new Date(2020, 10, 21), new Date(2020, 10, 23), 1, 77, null]
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

}
