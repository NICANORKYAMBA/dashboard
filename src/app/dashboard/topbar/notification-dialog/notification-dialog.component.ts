import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-notification-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent {
  notifications = [
    { message: 'New user registered', time: '2 minutes ago' },
    { message: 'Server downtime scheduled', time: '1 hour ago' },
    { message: 'New comment on your post', time: '3 hours ago' },
    { message: 'System update available', time: '1 day ago' }
  ];
}