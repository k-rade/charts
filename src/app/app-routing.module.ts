import { EChartComponent } from './e-chart/e-chart.component';
import { IssueChartComponent } from './issue-chart/issue-chart.component';
import { ChartComponent } from './chart/chart.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  { path: 'line-chart', component: ChartComponent },
  { path: 'issue-chart', component: IssueChartComponent },
  { path: 'e-chart', component: EChartComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
