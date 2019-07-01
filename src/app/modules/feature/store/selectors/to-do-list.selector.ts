import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromToDo from '../reducers/to-do-list.reducer';
import { getFeatureState } from './feature.selector';

export const getCompleteToDoStateState = createSelector(
  getFeatureState,
  (state: fromFeature.FeatureState) => state.toDoState
);

export const getToDoList = createSelector(
  getCompleteToDoStateState,
  fromToDo.getToDos
);


export const getSelectedToDoItem = createSelector(
  getCompleteToDoStateState,
  fromToDo.getSelectedToDo
);
