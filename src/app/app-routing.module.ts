import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/main/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/modules/feature/feature.module#FeatureModule'
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
