import * as fromToDoList from './to-do-list.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface FeatureState {
    toDoListState: fromToDoList.ToDoState;
}

export const reducers: ActionReducerMap<FeatureState> = {
  toDoListState: fromToDoList.reducer
};
