import { Component, OnInit } from '@angular/core';
import { ToDoEntity } from 'src/app/models/to-do-entity';

import * as fromStore from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html'
})
export class ToDoListComponent implements OnInit {
  header = {
    description: 'Description', title: 'Title', completed: 'Completed',
    date: 'Date', actions: 'Actions'
  };
  toDoList: ToDoEntity[] = [];

  constructor(private store: Store<fromStore.FeatureState>) { }

  ngOnInit() {
    this.store.select<any>('products').subscribe(state => {
      console.log(state);
    })
    //this.toDoList.push({ id: 1, description: 'test', title: '3', isDone: true, endDate: '15/5/2019' });
    //this.toDoList.push({ id: 1, description: 'test', title: '3', isDone: true, endDate: '15/5/2019' });
  }

}
