import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { View01Component } from "./components/view01/view01.component";

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, View01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test';

  showFiller = false;
}
