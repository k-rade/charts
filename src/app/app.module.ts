import { TimelineComponent } from './timeline/timeline.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { Chart3Component } from './chart3/chart3.component';

@NgModule({
  declarations: [
    TimelineComponent,
    AppComponent,
    NavbarComponent,
    ChartComponent,
    Chart3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    GoogleChartsModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
