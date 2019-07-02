import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoEntity } from 'src/app/models/to-do-entity';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

import { FeatureStoreFacade } from '../../store/feature.store.facade';

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
  readonly SECONDARY_BTN = 'Clear All';
  readonly LST_PRIMARY_BTN = 'Edit';
  readonly LST_SECONDARY_BTN = 'Delete';

  constructor(private router: Router,
              private store: FeatureStoreFacade) { }

  ngOnInit() {
    this.subscription = this.store.toDoList$
      .subscribe(toDos => {
        this.toDoList = toDos;
        this.checkForSuccess();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteSelectedToDo(id: number) {
    this.store.deleteSelectedToDo(id);
  }

  editSelectedToDo(selectedId: number) {
    const selectedItem = this.toDoList.filter(item => item.id === selectedId)[0];
    this.store.editSelectedToDo(selectedItem);
    this.router.navigateByUrl('/editToDo');
  }

  addNewToDo() {
    this.store.editSelectedToDo(null);
    this.router.navigateByUrl('/addToDo');
  }

  deleteAll() {
    this.store.deleteAll();
  }

  updateCompletionStatus(id: number) {
    this.store.updateCompletionStatus(id);
  }

  checkForSuccess() {
    if (this.toDoList.filter(itm => itm.isDone === true).length >= 3) {
      alert('Hooray');
    }
  }
}
