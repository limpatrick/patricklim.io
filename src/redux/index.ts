import events, { EventsState } from './events/reducers';

import { Action as EventsAction } from './events/actions';
import { combineReducers } from 'redux';

const reducers = combineReducers<StoreState>({ events });

export default reducers;

export interface StoreState {
  events: EventsState;
}

export type Action = EventsAction;
