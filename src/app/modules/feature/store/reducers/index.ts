import * as fromToDoList from './to-do-list.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface FeatureState {
    toDoList: fromToDoList.ToDoState;
}

export const reducers: ActionReducerMap<FeatureState> = {
    toDoList: fromToDoList.reducer
};

export const getFeatureState = createFeatureSelector<FeatureState>('feature');

export const getToDoList = createSelector(
    getFeatureState,
    (state: FeatureState) => state.toDoList.toDos
);