import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataList } from '../fakeData/brandData';
import { DataListRes } from '../types/brandOverView/brandOverViewRes';
import { tagTotal } from '../fakeData/tagTotalData';

@Injectable({
  providedIn: 'root',
})
export class BrandOverviewService {
  constructor() {}

  /** 品牌查詢所有標籤 */
  public gettagTotal(): Observable<string[]> {
    return of(tagTotal);
  }

  /** 品牌查詢資料 */
  public getDataList(): Observable<DataListRes[]> {
    return of(dataList);
  }
}
