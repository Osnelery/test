import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { data } from './model/data';
import { DriverViewDialogComponent } from './component/driver-view-dialog/driver-view-dialog.component';
import { SortByNamePipePipe } from '../../pipes/sort-by-name-pipe.pipe';
import { mouseDriverViewRes } from '../../types/mouseDriverView/res/mouseDriverViewRes';

@Component({
  selector: 'app-mouse-driver-view',
  imports: [CommonModule, SortByNamePipePipe],
  templateUrl: './mouse-driver-view.component.html',
  styleUrl: './mouse-driver-view.component.scss',
})
export class MouseDriverViewComponent {
  constructor(private dialog: MatDialog) {}

  driverBagData: mouseDriverViewRes[] = data;

  openDialog(data: mouseDriverViewRes) {
    const dialog = this.dialog.open(DriverViewDialogComponent, {
      width: 'md',
    });
    dialog.componentInstance.brandData = data;
  }
}
