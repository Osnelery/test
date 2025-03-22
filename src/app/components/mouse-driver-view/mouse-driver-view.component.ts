import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { data } from './model/data';
import { DriverViewDialogComponent } from './component/driver-view-dialog/driver-view-dialog.component';
import { SortByNamePipePipe } from '../../pipes/sort-by-name-pipe.pipe';
import { mouseDriverViewRes } from '../../types/mouseDriverView/res/mouseDriverViewRes';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

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
  ],
  templateUrl: './mouse-driver-view.component.html',
  styleUrl: './mouse-driver-view.component.scss',
})
export class MouseDriverViewComponent {
  constructor(private dialog: MatDialog) {}
  inputValue: string = '';
  driverBagData: mouseDriverViewRes[] = data;
  driverBagFliterData: mouseDriverViewRes[] = data;

  openDialog(data: mouseDriverViewRes) {
    const dialog = this.dialog.open(DriverViewDialogComponent, {
      width: 'md',
    });
    dialog.componentInstance.brandData = data;
  }

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
      this.driverBagData = data;
    }
  }
}
