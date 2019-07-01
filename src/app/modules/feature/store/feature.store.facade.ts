import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from './actions/to-do-list.actions';
import * as fromReducers from './reducers';
import * as fromSelectors from './selectors/to-do-list.selector';
import { ToDoEntity } from 'src/app/models/to-do-entity';

@Injectable({ providedIn: 'root' })
export class FeatureStoreFacade {
  toDoList$ = this.store.pipe(select(fromSelectors.getToDoList));
  selectedEntity$ = this.store.pipe(select(fromSelectors.getSelectedToDoItem));

  constructor(private store: Store<fromReducers.FeatureState>) { }

  addToDo(item: ToDoEntity) {
    this.store.dispatch(new fromActions.AddToDoItem(item));
  }

  updateToDo(item: ToDoEntity) {
    this.store.dispatch(new fromActions.UpdateToDoItem(item));
  }

  deleteSelectedToDo(id: number) {
    this.store.dispatch(new fromActions.DeleteToDoItem(id));
  }

  editSelectedToDo(selectedItem: ToDoEntity) {
    this.store.dispatch(new fromActions.EditToDoItem(selectedItem));
  }

  deleteAll() {
    this.store.dispatch(new fromActions.DeleteAllToDoItems());
  }

  updateCompletionStatus(id: number) {
    this.store.dispatch(new fromActions.CompleteToDo(id));
  }
}
