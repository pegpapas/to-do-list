import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoEntity } from 'src/app/models/to-do-entity';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

import { Store, select } from '@ngrx/store';
import * as fromActions from '../../store/actions/index';
import * as fromReducers from '../../store/reducers/index';
import * as fromSelectors from '../../store/selectors/index';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html'
})
export class ToDoListComponent implements OnInit, OnDestroy {
  header = {
    description: 'Description', title: 'Title', completed: 'Completed',
    date: 'Date', actions: 'Actions'
  };
  toDoList: ToDoEntity[] = [];
  private subscription: ISubscription;

  readonly PRIMARY_BTN = 'Add New';
  readonly SECONDARY_BTN  = 'Clear All';
  readonly LST_PRIMARY_BTN = 'Edit';
  readonly LST_SECONDARY_BTN  = 'Delete';

  constructor(private router: Router,
              private store: Store<fromReducers.FeatureState>) { }

  ngOnInit() {
    this.subscription = this.store.pipe(select(fromSelectors.getToDoListState))
      .subscribe(state => {
        this.toDoList = state.toDos;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteSelectedToDo(id: number) {
    this.store.dispatch(new fromActions.DeleteToDoItem(id));
  }

  editSelectedToDo(id: number) {
    this.router.navigateByUrl('/editToDo');
    this.store.dispatch(new fromActions.EditToDoItem(id));
  }

  addNewToDo() {
    this.router.navigateByUrl('/editToDo');
  }

  deleteAll() {
    this.store.dispatch(new fromActions.DeleteAllToDoItems());
  }
}
