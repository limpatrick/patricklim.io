import aggregatedTagsById, { AggregatedTagsByIdState } from './aggregatedTagsById';
import list, { ListState } from './list';
import selectedId, { SelectedIdState } from './selectedId';

import { combineReducers } from 'redux';

export interface EventsState {
  list: ListState;
  selectedId: SelectedIdState;
  aggregatedTagsById: AggregatedTagsByIdState;
}

export default combineReducers<EventsState>({ list, selectedId, aggregatedTagsById });
