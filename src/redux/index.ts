import animation, { AnimationState } from './animation/reducers';
import events, { EventsState } from './events/reducers';

import { Action as AnimationAction } from './animation/actions';
import { Action as EventsAction } from './events/actions';
import { combineReducers } from 'redux';

const reducers = combineReducers<StoreState>({ animation, events });

export default reducers;

export interface StoreState {
  animation: AnimationState;
  events: EventsState;
}

export type Action = AnimationAction | EventsAction;
