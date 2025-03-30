import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-news-dialog',
  imports: [],
  templateUrl: './latest-news-dialog.component.html',
  styleUrl: './latest-news-dialog.component.scss'
})
export class LatestNewsDialogComponent {
  @Input() data: any;
}
