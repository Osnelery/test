import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { latestNewsData } from './model/data';
import { SortByDatePipe } from '../../pipes/sort-by-date.pipe';
import { LatestNewsDialogComponent } from './component/latest-news-dialog/latest-news-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { StatementDialogComponent } from './component/statement-dialog/statement-dialog.component';

@Component({
  selector: 'app-space-view',
  imports: [CommonModule, SortByDatePipe, MatCardModule, MatTabsModule],
  templateUrl: './space-view.component.html',
  styleUrl: './space-view.component.scss',
})
export class SpaceViewComponent {
  constructor(private dialog: MatDialog) {}

  latestNewsList: any = latestNewsData;

  ngOnInit() {
    this.dialog.open(StatementDialogComponent, {
      minWidth: '500px',
      height: '280px',
      backdropClass: 'custom-backdrop'
    });
  }

  openDialog(data: any) {
    const dialog = this.dialog.open(LatestNewsDialogComponent, {
      minWidth: '650px',
      height: '400px',
    });
    dialog.componentInstance.data = data;
  }
}
