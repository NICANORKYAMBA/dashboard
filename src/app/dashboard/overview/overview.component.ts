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
  recentActivities: { date: string, activity: string, description: string }[] = [
    { date: '2023-01-15', activity: 'New climate policy enacted', description: 'A new policy aimed at reducing carbon emissions by 20% by 2030 was enacted.' },
    { date: '2023-02-10', activity: 'Global summit on climate change', description: 'Leaders from around the world gathered to discuss strategies for combating climate change.' },
    { date: '2023-03-05', activity: 'Record low Arctic ice extent', description: 'The Arctic ice extent reached a record low, highlighting the urgent need for climate action.' }
  ];
  renewableEnergyUsage: string = '20%';
  carbonFootprint: string = '4.5 tCO2e';
  airQualityIndex: string = '42 (Good)';
  wasteManagement: string = '60% recycled';

  temperatureAnomalies: number[] = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2];
  dataTable: { year: number, global: number, northern: number, southern: number }[] = [
    { year: 2015, global: 0.2, northern: 0.3, southern: 0.1 },
    { year: 2016, global: 0.5, northern: 0.4, southern: 0.6 },
    { year: 2017, global: 0.3, northern: 0.6, southern: 0.2 },
    { year: 2018, global: 0.7, northern: 0.5, southern: 0.9 },
    { year: 2019, global: 0.4, northern: 0.8, southern: 0.3 },
    { year: 2020, global: 1.2, northern: 1.1, southern: 1.3 }
  ];

  // Chart data
  public lineChartData = [
    { data: [0.2, 0.5, 0.3, 0.7, 0.4, 1.2], label: 'Global Temperature Anomalies', steppedLine: true },
    { data: [0.3, 0.4, 0.6, 0.5, 0.8, 1.1], label: 'Northern Hemisphere', steppedLine: true },
    { data: [0.1, 0.6, 0.2, 0.9, 0.3, 1.3], label: 'Southern Hemisphere', steppedLine: true }
  ];
  public lineChartLabels: string[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartPlugins = [];
}