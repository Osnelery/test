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

  navigateTo(path: string | undefined) {
    this.router.navigate([path]);
  }

  instagramClick() {
    window.open('https://www.instagram.com/osneleyr_3522/');
  }
  twitterClick() {
    window.open('https://x.com/wqwq3522');
  }
  discordClick() {
    window.open('https://discord.gg/w3k9Nbhzy9');
  }
  threadsClick() {
    window.open('https://www.threads.net/@osneleyr_3522');
  }
}
