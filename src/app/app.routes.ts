import { Routes } from '@angular/router';
import { UpdateLogViewComponent } from './components/update-log-view/update-log-view.component';
import { MouseDriverViewComponent } from './components/mouse-driver-view/mouse-driver-view.component';
import { SpaceViewComponent } from './components/space-view/space-view.component';

export const routes: Routes = [
  {
    title: '最新消息',
    path: '',
    component: SpaceViewComponent,
  },
  {
    title: '滑鼠驅動懶人包',
    path: 'mouseDriver',
    component: MouseDriverViewComponent,
  },
  {
    title: '更新日誌',
    path: 'updateLog',
    component: UpdateLogViewComponent,
  },
];
