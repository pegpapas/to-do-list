import * as fromToDoList from './to-do-list.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface FeatureState {
    toDoState: fromToDoList.ToDoState;
}

export const reducers: ActionReducerMap<FeatureState> = {
  toDoState: fromToDoList.reducer
};
