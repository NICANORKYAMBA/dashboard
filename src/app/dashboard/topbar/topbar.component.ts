import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../sidebar.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { EcoTipsDialogComponent } from './eco-tips-dialog/eco-tips-dialog.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    FontAwesomeModule
  ],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  faSearch = faSearch;
  isAccountMenuOpen = false;

  notifications = [
    { message: 'New climate policy announced', time: '2 minutes ago' },
    { message: 'Agricultural yield report released', time: '1 hour ago' },
    { message: 'New research on climate change impacts', time: '3 hours ago' },
    { message: 'Sustainable farming workshop scheduled', time: '1 day ago' },
    // Add more notifications as needed
  ];

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly dialog: MatDialog
  ) { }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleAccountMenu() {
    this.isAccountMenuOpen = !this.isAccountMenuOpen;
  }

  viewProfile() {
    // Implement view profile functionality here
    console.log('View Profile');
  }

  viewSettings() {
    // Implement view settings functionality here
    console.log('View Settings');
  }

  logout() {
    // Implement logout functionality here
    console.log('User logged out');
  }

  openHelp() {
    // Implement help functionality here
    console.log('Help clicked');
    // For example, you can redirect to a help page or open a help dialog
    window.open('https://example.com/help', '_blank');
  }

  openEcoTips() {
    // Open the eco tips dialog
    this.dialog.open(EcoTipsDialogComponent);
  }
}