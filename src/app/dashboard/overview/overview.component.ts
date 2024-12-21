import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    BaseChartDirective
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  globalTemperature: string = '1.2°C';
  seaLevelRise: string = '3.3mm/year';
  forestCover: string = '31%';
  co2Emissions: string = '36.7 Gt';
  recentActivities: string[] = [
    'New climate policy enacted',
    'Global summit on climate change',
    'Record low Arctic ice extent'
  ];
  renewableEnergyUsage: string = '20%';
  carbonFootprint: string = '4.5 tCO2e';
  airQualityIndex: string = '42 (Good)';
  wasteManagement: string = '60% recycled';

  temperatureAnomalies: number[] = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2];
  dataTable: { year: number, value: number }[] = [
    { year: 2015, value: 1.0 },
    { year: 2016, value: 1.1 },
    { year: 2017, value: 1.2 },
    { year: 2018, value: 1.3 },
    { year: 2019, value: 1.4 },
    { year: 2020, value: 1.5 }
  ];

  // Chart data
  public lineChartData: number[] = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2];
  public lineChartLabels: string[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartPlugins = [];
}