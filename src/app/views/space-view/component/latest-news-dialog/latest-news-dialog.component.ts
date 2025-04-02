import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-latest-news-dialog',
  imports: [],
  templateUrl: './latest-news-dialog.component.html',
  styleUrl: './latest-news-dialog.component.scss',
})
export class LatestNewsDialogComponent {
  @Input() data: any;
  constructor(private dialog: MatDialogRef<any>) {}

  close() {
    this.dialog.close();
  }
}
