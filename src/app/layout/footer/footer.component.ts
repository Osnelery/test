import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor() {}

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
