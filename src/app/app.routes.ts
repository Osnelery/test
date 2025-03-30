import { Routes } from '@angular/router';

import { SpaceViewComponent } from './views/space-view/space-view.component';
import { MouseDriverViewComponent } from './views/mouse-driver-view/mouse-driver-view.component';
import { UpdateLogViewComponent } from './views/update-log-view/update-log-view.component';
import { CooperativeCommunityComponent } from './views/cooperative-community/cooperative-community.component';

export const routes: Routes = [
  {
    title: '首頁',
    path: '',
    component: SpaceViewComponent,
  },
  {
    title: '滑鼠驅動懶人包',
    path: 'mouseDriver',
    component: MouseDriverViewComponent,
  },
  {
    title: '更新資訊',
    path: 'updateLog',
    component: UpdateLogViewComponent,
  },
  {
    title: '合作社群',
    path: 'community',
    component: CooperativeCommunityComponent,
  },
];
