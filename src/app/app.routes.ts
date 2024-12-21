import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: OverviewComponent },
    { path: 'overview', component: OverviewComponent },
    // Add more routes as needed
  ]},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Add more routes as needed
];