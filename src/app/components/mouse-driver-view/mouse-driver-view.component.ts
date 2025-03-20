import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { data } from './model/data';
import { DriverViewDialogComponent } from './component/driver-view-dialog/driver-view-dialog.component';

@Component({
  selector: 'app-mouse-driver-view',
  imports: [CommonModule],
  templateUrl: './mouse-driver-view.component.html',
  styleUrl: './mouse-driver-view.component.scss',
})
export class MouseDriverViewComponent {
  constructor(private dialog: MatDialog) {}

  driverBagData = data;

  openDialog() {
    this.dialog.open(DriverViewDialogComponent, {
      width: 'md',
    });
  }
}
