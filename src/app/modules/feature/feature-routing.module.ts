import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'toDoList' },
  { path: 'toDoList', component: ToDoListComponent },
 // { path: 'addToDo', component: AddToDoComponent },
  { path: '**', redirectTo: 'toDoList' }
];

export const FeatureRoutingModule = RouterModule.forChild(routes);
