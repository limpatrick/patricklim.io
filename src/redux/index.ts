import animation, { AnimationState } from './animation/reducers';
import events, { EventsState } from './events/reducers';
import tagsById, { TagsByIdState } from './tagsById/reducers';

import { Action as AnimationAction } from './animation/actions';
import { Action as EventsAction } from './events/actions';
import { combineReducers } from 'redux';

const reducers = combineReducers<StoreState>({ animation, events, tagsById });

export default reducers;

export interface StoreState {
  animation: AnimationState;
  events: EventsState;
  tagsById: TagsByIdState;
}

export type Action = AnimationAction | EventsAction;
