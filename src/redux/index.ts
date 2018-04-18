import animation, { AnimationState } from './animation/reducers';
import events, { EventsState } from './events/reducers';
import tags, { TagsState } from './tags/reducers';

import { Action as AnimationAction } from './animation/actions';
import { Action as EventsAction } from './events/actions';
import { Action as TagsAction } from './tags/actions';
import { combineReducers } from 'redux';

const reducers = combineReducers<StoreState>({ animation, events, tags });

export default reducers;

export interface StoreState {
  animation: AnimationState;
  events: EventsState;
  tags: TagsState;
}

export type Action = AnimationAction | EventsAction | TagsAction;
