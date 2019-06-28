import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/main/layout/layout.component';
import { LoginComponent } from './modules/main/log-in/log-in.component';

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
{
  path: 'login',
  component: LoginComponent
},
{ path: '**', redirectTo: 'login' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
