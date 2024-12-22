import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  reports = [
    { title: 'Annual Climate Report 2022', date: '2023-01-15', summary: 'A comprehensive overview of the climate changes observed in 2022.', details: 'This report covers temperature anomalies, sea level rise, and other significant climate indicators.' },
    { title: 'Renewable Energy Usage Report', date: '2023-02-10', summary: 'An analysis of the increase in renewable energy usage over the past year.', details: 'The report highlights the growth in solar, wind, and other renewable energy sources.' },
    { title: 'Carbon Footprint Analysis', date: '2023-03-05', summary: 'A detailed report on the carbon footprint of various industries.', details: 'This analysis provides insights into the carbon emissions from different sectors and suggests mitigation strategies.' },
    { title: 'Air Quality Index Report', date: '2023-04-20', summary: 'An assessment of the air quality in major cities around the world.', details: 'The report includes data on particulate matter, ozone levels, and other pollutants affecting air quality.' },
    { title: 'Forest Cover Report', date: '2023-05-15', summary: 'A study of the global forest cover and deforestation rates.', details: 'The report examines the impact of deforestation on biodiversity and climate change.' },
    { title: 'Waste Management Report', date: '2023-05-15', summary: 'A review of waste management practices and recycling rates globally.', details: 'The report evaluates the effectiveness of waste management policies and identifies areas for improvement.' },
    // Add more reports as needed
  ];

  selectedReport: any;

  constructor(private readonly dialog: MatDialog) {}

  showDetails(report: any) {
    this.selectedReport = report;
    this.dialog.open(this.dialogTemplate);
  }

  closeDetails() {
    this.dialog.closeAll();
  }
}