import list, { ListState } from './list';
import selectedId, { SelectedIdState } from './selectedId';

import { combineReducers } from 'redux';

export interface EventsState {
  list: ListState;
  selectedId: SelectedIdState;
}

export default combineReducers<EventsState>({ list, selectedId });
