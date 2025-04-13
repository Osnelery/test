import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataList } from '../views/brand-overview/data/brandData';
import { DataListRes } from '../types/brandOverView/brandOverViewRes';

@Injectable({
  providedIn: 'root',
})
export class BrandOverviewService {
  constructor() {}
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

  /** 品牌查詢所有標籤 */
  public gettagTotal(): Observable<string[]> {
    return of(this.tagTotal);
  }

  /** 品牌查詢資料 */
  public getDataList(): Observable<DataListRes[]> {
    return of(dataList);
  }
}
