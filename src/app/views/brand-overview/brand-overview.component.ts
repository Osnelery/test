import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { dataList } from './data/data';
import { SortByNamePipePipe } from '../../pipes/sort-by-name-pipe.pipe';

@Component({
  selector: 'app-brand-overview',
  imports: [
    MatChipsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SortByNamePipePipe,
  ],
  templateUrl: './brand-overview.component.html',
  styleUrl: './brand-overview.component.scss',
})
export class BrandOverviewComponent {
  constructor() {}
  typeTotal: string[] = [
    '滑鼠',
    '鍵盤',
    '滑鼠墊',
    '客製化滑鼠墊',
    '防滑貼',
    '腳貼',
    '改裝配件',
    '袖套',
    '週邊',
  ];

  data = dataList;
  tagList: string[] = [];

  ngOnInit() {}

  get dataSize(): number {
    return this.data.length;
  }

  tagClick(tag: string): void {
    const index = this.tagList.indexOf(tag);

    if (index === -1) {
      this.tagList.push(tag);
    } else {
      this.tagList.splice(index, 1);
    }

    console.log(this.tagList);
  }
}
