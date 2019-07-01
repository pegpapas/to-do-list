import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import { getFeatureState } from './feature.selector';

export const getCompleteFeatureState = createSelector(
  getFeatureState,
  (state: fromFeature.FeatureState) => state
);

export const getToDoListState = createSelector(
  getCompleteFeatureState,
  (state: fromFeature.FeatureState) => state.toDoListState
);
