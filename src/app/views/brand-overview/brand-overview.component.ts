import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-brand-overview',
  imports: [MatChipsModule, CommonModule],
  templateUrl: './brand-overview.component.html',
  styleUrl: './brand-overview.component.scss',
})
export class BrandOverviewComponent {
  typeTotal: string[] = ['鍵盤', '滑鼠', '滑鼠墊'];
}
