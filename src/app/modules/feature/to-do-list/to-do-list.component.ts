import { Component, OnInit } from '@angular/core';
import { ToDoEntity } from 'src/app/models/to-do-entity';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html'
})
export class ToDoListComponent implements OnInit {
  header: any;
  toDoList: ToDoEntity[] = [];

  constructor() { }

  ngOnInit() {
    this.header = {
      description: 'Description',
      title: 'Title',
      completed: 'Completed',
      date: 'Date',
      actions: 'Actions'
    };
    this.toDoList.push({ id: 1, description: 'test', title: '3', isDone: true, endDate: '15/5/2019' });
    this.toDoList.push({ id: 1, description: 'test', title: '3', isDone: true, endDate: '15/5/2019' });
  }

}
