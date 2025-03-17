import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MatToolbarModule } from '@angular/material/toolbar';
import { View01Component } from './components/view01/view01.component';
import { SidebarModule } from '@coreui/angular';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    View01Component,
    SidebarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test';

  showFiller = false;
}
