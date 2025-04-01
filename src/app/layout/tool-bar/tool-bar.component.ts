import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-tool-bar',
  imports: [MatToolbarModule, CommonModule, RouterModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {
  constructor(private router: Router) {}

  routers = routes;

  navigateTo(path: string | undefined, parentPath: string | undefined = '') {
    const fullPath = parentPath ? `${parentPath}/${path}` : path;

    this.router.navigate([fullPath]);
  }
}
