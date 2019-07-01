import { Action } from '@ngrx/store';
import { ToDoEntity } from 'src/app/models/to-do-entity';

export const ADD_TO_DO_ITEM = '[To Do] ADD ITEM';
export const EDIT_TO_DO_ITEM = '[To Do] EDIT ITEM';
export const UPDATE_TO_DO_ITEM = '[To Do] UPDATE_TO_DO_ITEM';
export const DELETE_TO_DO_ITEM = '[To Do] DELETE ITEM';
export const DELETE_ALL_TO_DO_ITEMS = '[To Do] DELETE ALL ITEMS';
export const COMPLETE_TO_DO = '[To Do] COMPLETE_TO_DO';

export class AddToDoItem implements Action {
    readonly type = ADD_TO_DO_ITEM;
    constructor(public payload: ToDoEntity) { }
}

export class EditToDoItem implements Action {
    readonly type = EDIT_TO_DO_ITEM;
    constructor(public payload: ToDoEntity) { }
}

export class UpdateToDoItem implements Action {
  readonly type = UPDATE_TO_DO_ITEM;
  constructor(public payload: ToDoEntity) { }
}

export class DeleteToDoItem implements Action {
    readonly type = DELETE_TO_DO_ITEM;
    constructor(public payload: number) { }
}

export class DeleteAllToDoItems implements Action {
    readonly type = DELETE_ALL_TO_DO_ITEMS;
    constructor() { }
}

export class CompleteToDo implements Action {
  readonly type = COMPLETE_TO_DO;
  constructor(public payload: number) { }
}

export type ToDoActions =
    AddToDoItem
    | EditToDoItem
    | UpdateToDoItem
    | DeleteToDoItem
    | DeleteAllToDoItems
    | CompleteToDo;
