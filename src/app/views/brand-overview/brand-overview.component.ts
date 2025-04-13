import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { dataList } from './data/data';
import { SortByNamePipePipe } from '../../pipes/sort-by-name-pipe.pipe';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-overview',
  imports: [
    MatChipsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    InputTextComponent,
    FormsModule,
    SortByNamePipePipe,
  ],
  templateUrl: './brand-overview.component.html',
  styleUrl: './brand-overview.component.scss',
})
export class BrandOverviewComponent {
  test: any;
  constructor() {}
  searchInputValue: string = '';
  tagTotal: string[] = [
    '滑鼠',
    '鍵盤',
    '客製化鍵盤',
    '滑鼠墊',
    '客製化滑鼠墊',
    '防滑貼',
    '通用防滑貼',
    '品牌專用防滑貼',
    '腳貼',
    '通用腳貼',
    '品牌專用腳貼',
    '改裝配件',
    '袖套',
    '飄帶',
    '週邊',
  ];

  data: any = dataList;
  filterData: any = dataList;
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

    if (this.tagList.length === 0) {
      this.data = dataList;
    } else {
      this.data = dataList.filter((item: any) =>
        item.tag.some((t: any) => this.tagList.includes(t))
      );
    }
  }

  filterContent() {
    if (this.searchInputValue) {
      this.data = this.filterData.filter(
        (data: any) =>
          data.englishName
            .toLowerCase()
            .includes(this.searchInputValue.toLowerCase()) ||
          data.chineseName
            .toLowerCase()
            .includes(this.searchInputValue.toLowerCase())
      );
    } else {
      this.data = dataList;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
