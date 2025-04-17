import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { dataList } from '../../fakeData/brandData';
import { SortByNamePipePipe } from '../../pipes/sort-by-name-pipe.pipe';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { BrandOverviewService } from '../../services/brand-overview.service';
import { DataListRes } from '../../types/brandOverView/brandOverViewRes';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

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
    MatExpansionModule,
    MatIconModule,
  ],
  templateUrl: './brand-overview.component.html',
  styleUrl: './brand-overview.component.scss',
})
export class BrandOverviewComponent {
  constructor(private brandService: BrandOverviewService) {}
  /** 查詢輸入框 */
  searchInputValue: string = '';
  /** 所有標籤 */
  tagTotal: any[] = [];
  /** 已選擇標籤 */
  tagList: string[] = [];
  /** 品牌查詢資料 */
  data: DataListRes[] = [];
  /** 品牌查詢資料 */
  filterData: DataListRes[] = [];

  ngOnInit() {
    forkJoin([
      this.brandService.gettagTotal(),
      this.brandService.getDataList(),
    ]).subscribe(([tagTotal, dataList]) => {
      this.tagTotal = tagTotal;
      this.data = dataList;
      this.filterData = dataList;
    });
  }

  /** 取得總筆數 */
  get dataSize(): number {
    return this.data.length;
  }

  /** 標籤點擊動作 */
  tagClick(tag: string) {
    const index = this.tagList.indexOf(tag);
    if (index === -1) {
      this.tagList.push(tag);
    } else {
      this.tagList.splice(index, 1);
    }

    this.filterDataByTags();
  }

  filterDataByTags() {
    if (this.tagList.length === 0) {
      this.data = this.filterData;
    } else {
      this.data = this.filterData.filter((item) =>
        item.tag.some((t: any) => this.tagList.includes(t))
      );
    }
  }

  /** 搜尋功能 */
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

  clearTag() {
    this.tagList = [];
    this.searchInputValue = '';
    this.filterDataByTags();
  }

  cancelTag(text: string) {
    const index = this.tagList.indexOf(text);
    if (index >= 0) {
      this.tagList.splice(index, 1);
    }
    this.filterDataByTags();
  }

  /** 至頂按鈕 */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** 至底按鈕 */
  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
