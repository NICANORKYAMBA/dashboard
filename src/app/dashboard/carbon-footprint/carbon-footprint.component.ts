import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    BaseChartDirective
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent {
  dataTable: { year: number, emissions: number, sector: string }[] = [
    { year: 2015, emissions: 35.5, sector: 'Energy' },
    { year: 2016, emissions: 36.0, sector: 'Transport' },
    { year: 2017, emissions: 36.5, sector: 'Industry' },
    { year: 2018, emissions: 37.0, sector: 'Agriculture' },
    { year: 2019, emissions: 37.5, sector: 'Residential' },
    { year: 2020, emissions: 38.0, sector: 'Commercial' },
    { year: 2021, emissions: 38.5, sector: 'Waste' },
    { year: 2022, emissions: 39.0, sector: 'Other' },
    { year: 2023, emissions: 39.5, sector: 'Transport' }
  ];

  // Bar Chart Data
  public barChartData: ChartData<'bar'> = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      { data: [35.5, 36.0, 36.5, 37.0, 37.5, 38.0, 38.5, 39.0, 39.5], label: 'Energy' },
      { data: [30.5, 31.0, 31.5, 32.0, 32.5, 33.0, 33.5, 34.0, 34.5], label: 'Transport' },
      { data: [25.5, 26.0, 26.5, 27.0, 27.5, 28.0, 28.5, 29.0, 29.5], label: 'Industry' }
    ]
  };
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  // Line Chart Data
  public lineChartData: ChartData<'line'> = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      { data: [35.5, 36.0, 36.5, 37.0, 37.5, 38.0, 38.5, 39.0, 39.5], label: 'Energy' },
      { data: [30.5, 31.0, 31.5, 32.0, 32.5, 33.0, 33.5, 34.0, 34.5], label: 'Transport' },
      { data: [25.5, 26.0, 26.5, 27.0, 27.5, 28.0, 28.5, 29.0, 29.5], label: 'Industry' }
    ]
  };
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartPlugins = [];

  // Pie Chart Data
  public pieChartData: ChartData<'pie'> = {
    labels: ['Energy', 'Transport', 'Industry', 'Agriculture', 'Residential', 'Commercial', 'Waste', 'Other'],
    datasets: [
      { data: [35.5, 30.5, 25.5, 20.5, 15.5, 10.5, 5.5, 2.5] }
    ]
  };
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // Doughnut Chart Data
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Energy', 'Transport', 'Industry', 'Agriculture', 'Residential', 'Commercial', 'Waste', 'Other'],
    datasets: [
      { data: [35.5, 30.5, 25.5, 20.5, 15.5, 10.5, 5.5, 2.5] }
    ]
  };
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
  };
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLegend = true;
  public doughnutChartPlugins = [];
}