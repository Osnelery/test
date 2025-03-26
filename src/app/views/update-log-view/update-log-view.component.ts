import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { data } from './model/data';
import { SortByDatePipe } from "../../pipes/sort-by-date.pipe";

@Component({
  selector: 'app-update-log-view',
  imports: [CommonModule, SortByDatePipe],
  templateUrl: './update-log-view.component.html',
  styleUrl: './update-log-view.component.scss',
})
export class UpdateLogViewComponent {
  constructor() {}
  updateLogData = data;
}
