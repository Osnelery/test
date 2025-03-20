import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { data } from './model/data';

@Component({
  selector: 'app-mouse-driver-view',
  imports: [CommonModule],
  templateUrl: './mouse-driver-view.component.html',
  styleUrl: './mouse-driver-view.component.scss',
})
export class MouseDriverViewComponent {
  constructor() {}

  driverBagData = data
}
