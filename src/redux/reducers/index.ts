import animation, { AnimationState } from './animation';

import { combineReducers } from 'redux';

const reducers = combineReducers<StoreState>({ animation });

export default reducers;

export interface StoreState {
  animation: AnimationState;
}
