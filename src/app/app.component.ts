import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from "./layout/tool-bar/tool-bar.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    ToolBarComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {}
  showFiller = false;

  routerPath: any = [];

  ngOnInit() {
    // this.routerPath = this.routers.filter(
    //   (routerPath) => routerPath.path !== ''
    // );
    // console.log( this.routerPath);
  }



}
