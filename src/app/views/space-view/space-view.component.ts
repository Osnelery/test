import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { latestNewsData } from './model/data';
import { SortByDatePipe } from '../../pipes/sort-by-date.pipe';
import { LatestNewsDialogComponent } from './component/latest-news-dialog/latest-news-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { StatementDialogComponent } from './component/statement-dialog/statement-dialog.component';
import { announcementData } from './model/announcementData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-space-view',
  imports: [
    CommonModule,
    SortByDatePipe,
    MatCardModule,
    MatTabsModule,
    FormsModule,
  ],
  templateUrl: './space-view.component.html',
  styleUrl: './space-view.component.scss',
})
export class SpaceViewComponent {
  constructor(private dialog: MatDialog) {
    window.onbeforeunload = () => {
      sessionStorage.clear();
    };
  }

  latestNewsList: any = latestNewsData;
  announcementList: any = announcementData;

  ngOnInit() {
    if (sessionStorage.getItem('statement') === null) {
      sessionStorage.setItem('statement', 'false');
    }

    if (sessionStorage.getItem('statement') === 'false') {
      this.openStatementDialog();
    } else {
      return;
    }
  }

  openDialog(data: any) {
    const dialog = this.dialog.open(LatestNewsDialogComponent, {
      minWidth: '550px',
      height: '300px',
    });
    dialog.componentInstance.data = data;
  }

  openStatementDialog() {
    this.dialog.open(StatementDialogComponent, {
      minWidth: '500px',
      height: '280px',
    });
    sessionStorage.setItem('statement', 'true');
  }
}
