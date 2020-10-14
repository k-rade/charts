import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  hour = 0;
  min = 0;
  sec = 2;

  today = new Date();
  minDate = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0, 0, 0);
  maxDate = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0, 1,)

  type = 'LineChart';
  chartData: Array<Array<any>> = [
    [new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate(), 0, 0, 1), 2],
  ];

  options = {
    backgroundColor: 'transparent',
    legend: 'none',
    tooltip: { isHtml: true },
    vAxis: {
      textPosition: 'none'
    },
    hAxis: {
      viewWindow: {
        min: this.minDate,
        max: this.maxDate
      }
    },
    width: 1000
  };

  ngOnInit(): void {
    setInterval(() => { this.addData() }, 200);
  }

  addData() {
    console.log(this.sec);
    if (this.min == this.maxDate.getMinutes()) {
      this.minDate.setMinutes(this.min);
      this.maxDate.setMinutes(this.min + 1)
    }
    const data: Array<Array<any>> = [
      [new Date(2020, 10, this.today.getDate(), this.hour, this.min, this.sec), Math.floor(Math.random() * (50 - 20) + 20)]
    ];
    this.chartData = [...this.chartData, ...data];
    this.sec++;
    if (this.sec == 60) {
      this.sec = 0;
      this.min++;
    }

    if (this.min == 60) {
      this.hour++;
    }
  }


}
