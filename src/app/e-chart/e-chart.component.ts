import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-chart',
  templateUrl: './e-chart.component.html',
  styleUrls: ['./e-chart.component.scss']
})
export class EChartComponent implements OnInit {

  options: any;
  updateOptions: any;
  private data: any[];
  private timer: any;

  constructor() { }

  ngOnInit(): void {
    // generate some random testing data:
    this.data = [];

    // initialize chart options:
    this.options = {
      title: {
        text: 'issue 1',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45', '00:00']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} W'
        },
        axisPointer: {
          snap: true
        }
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
          lte: 6,
          color: 'green'
        }, {
          gt: 6,
          lte: 8,
          color: 'red'
        }, {
          gt: 8,
          lte: 14,
          color: 'green'
        }, {
          gt: 14,
          lte: 17,
          color: 'red'
        }, {
          gt: 17,
          color: 'green'
        }]
      },
      series: [
        {
          name: 'Issues',
          type: 'line',
          smooth: true,
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
          markArea: {
            data: [[{
              name: 'Issue 1',
              xAxis: '07:30'
            }, {
              xAxis: '10:00'
            }], [{
              name: 'Issue 2',
              xAxis: '17:30'
            }, {
              xAxis: '21:15'
            }]]
          }
        }
      ]
    };

  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
