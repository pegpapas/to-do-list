import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/main/layout/layout.component';

export const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'toDo',
      loadChildren: 'src/app/modules/feature/feature.module#FeatureModule'
    },
  ]
},
//{ path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
