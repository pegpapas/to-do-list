import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { EditToDoItemComponent } from './components/edit-to-do-item/edit-to-do-item.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'toDoList'
  },
  {
    path: 'toDoList',
    component: ToDoListComponent
  },
  {
    path: 'addToDo',
    component: EditToDoItemComponent
  },
  {
    path: 'editToDo',
    component: EditToDoItemComponent
  },
  {
    path: '**',
    redirectTo: 'toDoList'
  }
];

export const FeatureRoutingModule = RouterModule.forChild(routes);
