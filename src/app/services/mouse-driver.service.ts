import { Injectable } from '@angular/core';
import { MouseDriverRes } from '../types/mouseDriverView/res/mouseDriverViewRes';
import { Observable, of } from 'rxjs';
import { mouseDriverData } from '../fakeData/data';

@Injectable({
  providedIn: 'root',
})
export class MouseDriverService {
  constructor() {}

  /** 驅動懶人包資料 */
  public getMouseDriverData(): Observable<MouseDriverRes[]> {
    return of(mouseDriverData);
  }
}
