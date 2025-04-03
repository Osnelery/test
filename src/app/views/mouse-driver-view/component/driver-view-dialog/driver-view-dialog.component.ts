import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { OrderByNamePipe } from '../../../../pipes/order-by-name.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogRef } from '@angular/material/dialog';
import { MouseDriverRes } from '../../../../types/mouseDriverView/res/mouseDriverViewRes';

@Component({
  selector: 'app-driver-view-dialog',
  imports: [
    MatExpansionModule,
    CommonModule,
    OrderByNamePipe,
    MatCardModule,
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './driver-view-dialog.component.html',
  styleUrl: './driver-view-dialog.component.scss',
})
export class DriverViewDialogComponent {
  constructor(private dialog: MatDialogRef<any>) {}

  @Input() detailsData!: MouseDriverRes;

  downLoadMouseList: any;

  close() {
    this.dialog.close();
  }

  goWeb(url: string) {
    window.open(url, '_blank');
  }

  getUrl(url: string) {
    window.open(url, '_blank');
  }
}
