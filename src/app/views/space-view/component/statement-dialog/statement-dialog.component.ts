import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-statement-dialog',
  imports: [],
  templateUrl: './statement-dialog.component.html',
  styleUrl: './statement-dialog.component.scss',
})
export class StatementDialogComponent {
  constructor(private dialog: MatDialogRef<any>) {}

  close() {
    this.dialog.close();
  }
}
