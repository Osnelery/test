import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SortByNamePipePipe } from '../../pipes/sort-by-name-pipe.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DriverViewDialogComponent } from './component/driver-view-dialog/driver-view-dialog.component';
import { MouseDriverRes } from '../../types/mouseDriverView/res/mouseDriverViewRes';
import { mouseDriverData } from '../../fakeData/data';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { forkJoin } from 'rxjs';
import { MouseDriverService } from '../../services/mouse-driver.service';

@Component({
  selector: 'app-mouse-driver-view',
  imports: [
    CommonModule,
    SortByNamePipePipe,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    InputTextComponent,
  ],
  templateUrl: './mouse-driver-view.component.html',
  styleUrl: './mouse-driver-view.component.scss',
})
export class MouseDriverViewComponent {
  constructor(
    private dialog: MatDialog,
    private mouseDriverService: MouseDriverService
  ) {}
  /** 查詢框輸入 */
  inputValue: string = '';
  /** 滑鼠驅動資料 */
  driverBagData: MouseDriverRes[] = [];
  /** 滑鼠驅動篩選資料 */
  driverBagFliterData: MouseDriverRes[] = [];

  ngOnInit() {
    forkJoin([this.mouseDriverService.getMouseDriverData()]).subscribe(
      ([mouseData]) => {
        this.driverBagData = mouseData;
        this.driverBagFliterData = mouseData;
      }
    );
  }

  /** 打開詳細資料彈窗 */
  openDialog(row: MouseDriverRes) {
    const dialog = this.dialog.open(DriverViewDialogComponent, {
      minWidth: '800px',
      minHeight: '500px',
    });
    dialog.componentInstance.detailsData = row;
  }

  /** 搜尋功能 */
  filterContent() {
    if (this.inputValue) {
      this.driverBagData = this.driverBagFliterData.filter(
        (data) =>
          data.englishName
            .toLowerCase()
            .includes(this.inputValue.toLowerCase()) ||
          data.chineseName.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    } else {
      this.getMouseDriverData();
    }
  }

  /** 取得滑鼠驅動懶人包資料 */
  getMouseDriverData() {
    this.mouseDriverService.getMouseDriverData().subscribe({
      next: () => {
        this.driverBagData = mouseDriverData;
      },
    });
  }
}
