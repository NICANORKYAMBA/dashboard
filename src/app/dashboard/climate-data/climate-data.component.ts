import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-climate-data',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './climate-data.component.html',
  styleUrls: ['./climate-data.component.css']
})
export class ClimateDataComponent {
  temperatureColumns: string[] = ['year', 'global', 'northern', 'southern'];
  temperatureData = [
    { year: 2015, global: 0.2, northern: 0.3, southern: 0.1 },
    { year: 2016, global: 0.5, northern: 0.4, southern: 0.6 },
    { year: 2017, global: 0.3, northern: 0.6, southern: 0.2 },
    { year: 2018, global: 0.7, northern: 0.5, southern: 0.9 },
    { year: 2019, global: 0.4, northern: 0.8, southern: 0.3 },
    { year: 2020, global: 1.2, northern: 1.1, southern: 1.3 },
    { year: 2021, global: 0.9, northern: 1.2, southern: 0.6 },
    { year: 2022, global: 1.4, northern: 1.3, southern: 1.5 },
    { year: 2023, global: 1.6, northern: 1.5, southern: 1.7 },
  ];

  seaLevelColumns: string[] = ['year', 'global'];
  seaLevelData = [
    { year: 2015, global: 3.2 },
    { year: 2016, global: 3.4 },
    { year: 2017, global: 3.6 },
    { year: 2018, global: 3.8 },
    { year: 2019, global: 4.0 },
    { year: 2020, global: 4.2 },
    { year: 2021, global: 4.4 },
    { year: 2022, global: 4.6 },
    { year: 2023, global: 4.8 }
  ];

  co2EmissionsColumns: string[] = ['year', 'global'];
  co2EmissionsData = [
    { year: 2015, global: 35.5 },
    { year: 2016, global: 35.8 },
    { year: 2017, global: 36.2 },
    { year: 2018, global: 36.5 },
    { year: 2019, global: 36.7 },
    { year: 2020, global: 36.4 },
    { year: 2021, global: 36.6 },
    { year: 2022, global: 36.8 },
    { year: 2023, global: 37.0 }
  ];

  seasonalTemperatureColumns: string[] = ['year', 'season', 'temperature'];
  seasonalTemperatureData = [
    { year: 2015, season: 'Winter', temperature: -0.1 },
    { year: 2015, season: 'Spring', temperature: 0.2 },
    { year: 2015, season: 'Summer', temperature: 0.5 },
    { year: 2015, season: 'Fall', temperature: 0.3 },
    { year: 2016, season: 'Winter', temperature: 0.0 },
    { year: 2016, season: 'Spring', temperature: 0.3 },
    { year: 2016, season: 'Summer', temperature: 0.6 },
    { year: 2016, season: 'Fall', temperature: 0.4 },
    { year: 2017, season: 'Winter', temperature: 0.2 },
    { year: 2017, season: 'Spring', temperature: 0.4 },
    { year: 2017, season: 'Summer', temperature: 0.7 },
    { year: 2017, season: 'Fall', temperature: 0.5 },
    { year: 2018, season: 'Winter', temperature: 0.4 },
    { year: 2018, season: 'Spring', temperature: 0.5 },
    { year: 2018, season: 'Summer', temperature: 0.8 },
    { year: 2018, season: 'Fall', temperature: 0.6 },
    { year: 2019, season: 'Winter', temperature: 0.3 },
    { year: 2019, season: 'Spring', temperature: 0.4 },
    { year: 2019, season: 'Summer', temperature: 0.7 },
    { year: 2019, season: 'Fall', temperature: 0.5 },
    { year: 2020, season: 'Winter', temperature: 0.2 },
    { year: 2020, season: 'Spring', temperature: 0.4 },
    { year: 2020, season: 'Summer', temperature: 0.7 },
    { year: 2020, season: 'Fall', temperature: 0.5 },
    { year: 2021, season: 'Winter', temperature: 0.3 },
    { year: 2021, season: 'Spring', temperature: 0.4 },
    { year: 2021, season: 'Summer', temperature: 0.7 },
    { year: 2021, season: 'Fall', temperature: 0.5 },
    { year: 2022, season: 'Winter', temperature: 0.4 },
    { year: 2022, season: 'Spring', temperature: 0.5 },
    { year: 2022, season: 'Summer', temperature: 0.8 },
    { year: 2022, season: 'Fall', temperature: 0.6 },
    { year: 2023, season: 'Winter', temperature: 0.5 },
    { year: 2023, season: 'Spring', temperature: 0.6 },
    { year: 2023, season: 'Summer', temperature: 0.9 },
    { year: 2023, season: 'Fall', temperature: 0.7 },
    // Add more data as needed
  ];

  precipitationColumns: string[] = ['year', 'global', 'northern', 'southern'];
  precipitationData = [
    { year: 2015, global: 1000, northern: 600, southern: 400 },
    { year: 2016, global: 1100, northern: 650, southern: 450 },
    { year: 2017, global: 1050, northern: 620, southern: 430 },
    { year: 2018, global: 1150, northern: 680, southern: 470 },
    { year: 2019, global: 1080, northern: 640, southern: 440 },
    { year: 2020, global: 1200, northern: 700, southern: 500 },
    { year: 2021, global: 1150, northern: 700, southern: 500 },
    { year: 2022, global: 1200, northern: 750, southern: 550 },
    { year: 2023, global: 1250, northern: 800, southern: 450 },
    // Add more data as needed
  ];

  solarRadiationColumns: string[] = ['year', 'global', 'northern', 'southern', 'equator'];
  solarRadiationData = [
    { year: 2015, global: 1000, northern: 800, southern: 200, equator: 100 },
    { year: 2016, global: 1100, northern: 900, southern: 250, equator: 110 },
    { year: 2017, global: 1050, northern: 850, southern: 200, equator: 105 },
    { year: 2018, global: 1150, northern: 950, southern: 250, equator: 115 },
    { year: 2019, global: 1080, northern: 880, southern: 220, equator: 108 },
    { year: 2020, global: 1200, northern: 1000, southern: 200, equator: 120 },
    { year: 2021, global: 1150, northern: 950, southern: 200, equator: 115 },
    { year: 2022, global: 1200, northern: 1000, southern: 200, equator: 120 },
    { year: 2023, global: 1250, northern: 1050, southern: 200, equator: 125 },
    // Add more data as needed
  ];

  windSpeedColumns: string[] = ['year', 'global', 'northern', 'southern', 'equator', 'tropics'];
  windSpeedData = [
    { year: 2015, global: 10, northern: 5, southern: 3, equator: 8, tropics: 3 },
    { year: 2016, global: 12, northern: 6, southern: 4, equator: 9, tropics: 4 },
    { year: 2017, global: 11, northern: 5, southern: 3, equator: 8, tropics: 3 },
    { year: 2018, global: 13, northern: 7, southern: 5, equator: 10, tropics: 5 },
    { year: 2019, global: 10, northern: 6, southern: 4, equator: 9, tropics: 4 },
    { year: 2020, global: 12, northern: 7, southern: 5, equator: 10, tropics: 5 },
    { year: 2021, global: 11, northern: 6, southern: 4, equator: 9, tropics: 4 },
    { year: 2022, global: 13, northern: 7, southern: 5, equator: 10, tropics: 5 },
    { year: 2023, global: 15, northern: 8, southern: 6, equator: 11, tropics: 6 },
    // Add more data as needed
  ];

  airQualityColumns: string[] = ['year', 'index', 'status', 'airQuality'];
  airQualityData = [
    { year: 2015, index: 100, status: 'Good', airQuality: 'Excellent' },
    { year: 2016, index: 90, status: 'Moderate', airQuality: 'Good' },
    { year: 2017, index: 80, status: 'Unhealthy for Sensitive Groups', airQuality: 'Moderate' },
    { year: 2018, index: 70, status: 'Unhealthy', airQuality: 'Moderate' },
    { year: 2019, index: 60, status: 'Very Unhealthy', airQuality: 'Unhealthy' },
    { year: 2020, index: 50, status: 'Hazardous', airQuality: 'Very Unhealthy' },
    { year: 2021, index: 50, status: 'Hazardous', airQuality: 'Very Unhealthy' },
    { year: 2022, index: 50, status: 'Hazardous', airQuality: 'Very Unhealthy' },
    { year: 2023, index: 50, status: 'Hazardous', airQuality: 'Very Unhealthy' },
    // Add more data as needed
  ];
}