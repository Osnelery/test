import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-driver-view',
  imports: [CommonModule],
  templateUrl: './mouse-driver-view.component.html',
  styleUrl: './mouse-driver-view.component.scss',
})
export class MouseDriverViewComponent {
  constructor() {}

  data = [
    {
      id: '1',
      src: 'images/Lamzu.jpg',
      title: 'Lamzu 蘭族',
    },
    {
      id: '2',
      src: 'images/Ninjutso.jpg',
      title: 'Ninjutso',
    },
    {
      id: '3',
      src: 'images/Ajazz.jpg',
      title: 'Ajazz 黑爵',
    },
    {
      id: '4',
      src: 'images/Bloody Gaming.png',
      title: 'Bloody Gaming 血手幽靈',
    },
    {
      id: '5',
      src: 'images/Cooler Master.jpg',
      title: 'CoolerMaster 酷碼',
    },
    {
      id: '6',
      src: 'images/Corsair.png',
      title: 'Corsair 海盜船',
    },
  ];
}
