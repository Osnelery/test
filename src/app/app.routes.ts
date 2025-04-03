import { Routes } from '@angular/router';
import { SpaceViewComponent } from './views/space-view/space-view.component';
import { MouseDriverViewComponent } from './views/mouse-driver-view/mouse-driver-view.component';
import { BrandOverviewComponent } from './views/brand-overview/brand-overview.component';

export const routes: Routes = [
  {
    title: '首頁',
    path: '',
    component: SpaceViewComponent,
  },
  // {
  //   title: '品牌查詢',
  //   path: 'brandOverview',
  //   component: BrandOverviewComponent,
  // },
  {
    title: '驅動懶人包',
    path: 'tool',
    children: [
      {
        title: '滑鼠',
        path: 'mouseDriver',
        component: MouseDriverViewComponent,
      },
      // {
      //   title: '鍵盤',
      //   path: '',
      //   component: SpaceViewComponent,
      // },
    ],
  },
];
