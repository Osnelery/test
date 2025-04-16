import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './layout/tool-bar/tool-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { StatementDialogComponent } from './views/space-view/component/statement-dialog/statement-dialog.component';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    ToolBarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private dialog: MatDialog) {
    window.onbeforeunload = () => {
      sessionStorage.clear();
    };
  }

  showFiller = false;

  routerPath: any = [];

  ngOnInit() {
    if (sessionStorage.getItem('statement') === null) {
      sessionStorage.setItem('statement', 'false');
    }

    if (sessionStorage.getItem('statement') === 'false') {
      this.openStatementDialog();
    } else {
      return;
    }
  }

  openStatementDialog() {
    this.dialog.open(StatementDialogComponent, {
      minWidth: '500px',
      height: '280px',
    });
    sessionStorage.setItem('statement', 'true');
  }
}
