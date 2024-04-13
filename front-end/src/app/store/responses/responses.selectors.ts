import { createSelector } from 'reselect';
import { State } from '../../types/state.type';

export const getResponsesState = (state: State) => state.RESPONSES

export const getResponses = createSelector(
  getResponsesState,
  (state) => state.responses
);

export const getAreResponsesLoaded = createSelector(
  getResponsesState,
  (state) => state.isLoaded
)
