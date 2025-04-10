import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { dataList } from './data/data';

@Component({
  selector: 'app-brand-overview',
  imports: [MatChipsModule, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './brand-overview.component.html',
  styleUrl: './brand-overview.component.scss',
})
export class BrandOverviewComponent {
  typeTotal: string[] = ['滑鼠', '鍵盤', '滑鼠墊'];

  data = dataList
}
