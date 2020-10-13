import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  today = new Date();
  type = 'Timeline';
  chartData: Array<Array<any>> = [
    ['Incidents', 'Incident 1', new Date(2020, 10, 13, 10, 45), new Date(2020, 10, 13, 12, 45)],
    ['Issues', 'Issue 1', new Date(2020, 10, 13, 7, 0), new Date(2020, 10, 13, 7, 46)],
    ['OEE', 'Tooltip2', new Date(2020, 10, 13, 15, 45), new Date(2020, 10, 13, 22, 55)],
  ];

  options: object = {
    tooltip: { isHtml: true },
    hAxis: {
      textPosition: 'none',
      minValue: new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0),
      maxValue: new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 24)
    },
    width: 1000
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.today.getFullYear());
    console.log(this.today.getMonth());
    console.log(this.today.getDate());
    console.log(new Date());
  }

}
