import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  today = new Date();
  minDate = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0, 0, 0);
  maxDate = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0, 1);

  type = 'Timeline';
  chartData: Array<Array<any>> = [
    ['Incidents', 'Incident 1', new Date(2020, 10, 14, 0, 0, 12), new Date(2020, 10, 14, 2, 5, 24)],
    ['Issues', 'Issue 1', new Date(2020, 10, 14, 7, 0), new Date(2020, 10, 14, 7, 46)],
    ['OEE', 'Tooltip2', new Date(2020, 10, 14, 15, 45), new Date(2020, 10, 14, 22, 55)],
  ];

  options: object = {
    tooltip: { isHtml: true },
    hAxis: {
      textPosition: 'none',
      minValue: new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0, 0),
      maxValue: new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0, 1)
    },
    width: 1000
  };

  ngOnInit(): void {
  }

}
