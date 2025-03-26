import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { data } from '../../../../common/data';
import { mouseDriverViewRes } from '../../../../types/mouseDriverView/res/mouseDriverViewRes';
import { CommonModule } from '@angular/common';
import { OrderByNamePipe } from '../../../../pipes/order-by-name.pipe';

@Component({
  selector: 'app-driver-view-dialog',
  imports: [MatExpansionModule, CommonModule, OrderByNamePipe],
  templateUrl: './driver-view-dialog.component.html',
  styleUrl: './driver-view-dialog.component.scss',
})
export class DriverViewDialogComponent {
  constructor() {}

  @Input() brandData: mouseDriverViewRes | undefined;

  driverData: mouseDriverViewRes[] = data;

  getWindowsDriver() {
    if (this.brandData) {
      window.open(this.brandData.downloadDriverUrl);
    }
  }

  getWebDriver() {
    if (this.brandData) {
      window.open(this.brandData.webDriverUrl);
    }
  }

  getFormattedDownloadMouseList(): string {
    if (this.brandData) {
      return this.brandData.downloadMouseList.join(', ');
    }
    return '';
  }
}
