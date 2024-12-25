import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-renewable-energy',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    BaseChartDirective
  ],
  templateUrl: './renewable-energy.component.html',
  styleUrls: ['./renewable-energy.component.css']
})
export class RenewableEnergyComponent {
  renewableEnergyColumns: string[] = ['year', 'solar', 'wind', 'hydro', 'biomass', 'geothermal'];
  renewableEnergyData = [
    { year: 2015, solar: 200, wind: 300, hydro: 400, biomass: 100, geothermal: 50 },
    { year: 2016, solar: 250, wind: 350, hydro: 420, biomass: 120, geothermal: 55 },
    { year: 2017, solar: 300, wind: 400, hydro: 430, biomass: 130, geothermal: 60 },
    { year: 2018, solar: 350, wind: 450, hydro: 440, biomass: 140, geothermal: 65 },
    { year: 2019, solar: 400, wind: 500, hydro: 450, biomass: 150, geothermal: 70 },
    { year: 2020, solar: 450, wind: 550, hydro: 460, biomass: 160, geothermal: 75 },
    { year: 2021, solar: 500, wind: 600, hydro: 470, biomass: 170, geothermal: 80 },
    { year: 2022, solar: 550, wind: 650, hydro: 480, biomass: 180, geothermal: 85 },
    { year: 2023, solar: 600, wind: 700, hydro: 490, biomass: 190, geothermal: 90 }
  ];

  energyConsumptionColumns: string[] = ['year', 'solar', 'wind', 'hydro', 'biomass', 'geothermal'];
  energyConsumptionData = [
    { year: 2015, solar: 150, wind: 250, hydro: 350, biomass: 80, geothermal: 40 },
    { year: 2016, solar: 180, wind: 280, hydro: 370, biomass: 90, geothermal: 45 },
    { year: 2017, solar: 210, wind: 310, hydro: 380, biomass: 100, geothermal: 50 },
    { year: 2018, solar: 240, wind: 340, hydro: 390, biomass: 110, geothermal: 55 },
    { year: 2019, solar: 270, wind: 370, hydro: 400, biomass: 120, geothermal: 60 },
    { year: 2020, solar: 300, wind: 400, hydro: 410, biomass: 130, geothermal: 65 },
    { year: 2021, solar: 330, wind: 430, hydro: 420, biomass: 140, geothermal: 70 },
    { year: 2022, solar: 360, wind: 460, hydro: 430, biomass: 150, geothermal: 75 },
    { year: 2023, solar: 390, wind: 490, hydro: 440, biomass: 160, geothermal: 80 }
  ];

  capacityColumns: string[] = ['year', 'solar', 'wind', 'hydro', 'biomass', 'geothermal'];
  capacityData = [
    { year: 2015, solar: 100, wind: 150, hydro: 200, biomass: 50, geothermal: 25 },
    { year: 2016, solar: 120, wind: 170, hydro: 210, biomass: 60, geothermal: 30 },
    { year: 2017, solar: 140, wind: 190, hydro: 220, biomass: 70, geothermal: 35 },
    { year: 2018, solar: 160, wind: 210, hydro: 230, biomass: 80, geothermal: 40 },
    { year: 2019, solar: 180, wind: 230, hydro: 240, biomass: 90, geothermal: 45 },
    { year: 2020, solar: 200, wind: 250, hydro: 250, biomass: 100, geothermal: 50 },
    { year: 2021, solar: 220, wind: 270, hydro: 260, biomass: 110, geothermal: 55 },
    { year: 2022, solar: 240, wind: 290, hydro: 270, biomass: 120, geothermal: 60 },
    { year: 2023, solar: 260, wind: 310, hydro: 280, biomass: 130, geothermal: 65 }
  ];

  investmentColumns: string[] = ['year', 'solar', 'wind', 'hydro', 'biomass', 'geothermal'];
  investmentData = [
    { year: 2015, solar: 50, wind: 75, hydro: 100, biomass: 25, geothermal: 12 },
    { year: 2016, solar: 60, wind: 85, hydro: 105, biomass: 30, geothermal: 15 },
    { year: 2017, solar: 70, wind: 95, hydro: 110, biomass: 35, geothermal: 18 },
    { year: 2018, solar: 80, wind: 105, hydro: 115, biomass: 40, geothermal: 20 },
    { year: 2019, solar: 90, wind: 115, hydro: 120, biomass: 45, geothermal: 22 },
    { year: 2020, solar: 100, wind: 125, hydro: 125, biomass: 50, geothermal: 25 },
    { year: 2021, solar: 110, wind: 135, hydro: 130, biomass: 55, geothermal: 28 },
    { year: 2022, solar: 120, wind: 145, hydro: 135, biomass: 60, geothermal: 30 },
    { year: 2023, solar: 130, wind: 155, hydro: 140, biomass: 65, geothermal: 32 }
  ];

  // Bar Chart Data
  public barChartData: ChartData<'bar'> = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      { data: [200, 250, 300, 350, 400, 450, 500, 550, 600], label: 'Solar' },
      { data: [300, 350, 400, 450, 500, 550, 600, 650, 700], label: 'Wind' },
      { data: [400, 420, 430, 440, 450, 460, 470, 480, 490], label: 'Hydro' }
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
      { data: [200, 250, 300, 350, 400, 450, 500, 550, 600], label: 'Solar' },
      { data: [300, 350, 400, 450, 500, 550, 600, 650, 700], label: 'Wind' },
      { data: [400, 420, 430, 440, 450, 460, 470, 480, 490], label: 'Hydro' }
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
    labels: ['Solar', 'Wind', 'Hydro', 'Biomass', 'Geothermal'],
    datasets: [
      { data: [600, 700, 490, 190, 90] }
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
    labels: ['Solar', 'Wind', 'Hydro', 'Biomass', 'Geothermal'],
    datasets: [
      { data: [600, 700, 490, 190, 90] }
    ]
  };
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
  };
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLegend = true;
  public doughnutChartPlugins = [];
}