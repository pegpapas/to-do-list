import { Action } from '@ngrx/store'

export const ADD_TO_DO_ITEM = '[To Do] ADD ITEM';
export const EDIT_TO_DO_ITEM = '[To Do] EDIT ITEM';
export const DELETE_TO_DO_ITEM = '[To Do] DELETE ITEM';
export const DELETE_ALL_TO_DO_ITEMS = '[To Do] DELETE ALL ITEMS';

export class AddToDoItem implements Action {
    readonly type = ADD_TO_DO_ITEM;
    constructor(public payload: any) { }
}

export class EditToDoItem implements Action {
    readonly type = EDIT_TO_DO_ITEM;
    constructor(public payload: any) { }
}

export class DeleteToDoItem implements Action {
    readonly type = DELETE_TO_DO_ITEM;
    constructor(public payload: any) { }
}

export class DeleteAllToDoItems implements Action {
    readonly type = DELETE_ALL_TO_DO_ITEMS;
    constructor(public payload: any) { }
}

export type ToDoActions =
    AddToDoItem
    | EditToDoItem
    | DeleteToDoItem
    | DeleteAllToDoItems;
