import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { ClimateDataComponent } from './dashboard/climate-data/climate-data.component';
import { RenewableEnergyComponent } from './dashboard/renewable-energy/renewable-energy.component';
import { CarbonFootprintComponent } from './dashboard/carbon-footprint/carbon-footprint.component';
import { WaterUsageComponent } from './dashboard/water-usage/water-usage.component';
import { EnergyUsageComponent } from './dashboard/energy-usage/energy-usage.component';
import { WasteManagementComponent } from './dashboard/waste-management/waste-management.component';
import { AirQualityComponent } from './dashboard/air-quality/air-quality.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: OverviewComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'climate-data', component: ClimateDataComponent },
    { path: 'renewable-energy', component: RenewableEnergyComponent },
    { path: 'carbon-footprint', component: CarbonFootprintComponent },
    { path: 'water-usage', component: WaterUsageComponent },
    { path: 'energy-usage', component: EnergyUsageComponent },
    { path: 'waste-management', component: WasteManagementComponent },
    { path: 'air-quality', component: AirQualityComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
  ]},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Add more routes as needed
];