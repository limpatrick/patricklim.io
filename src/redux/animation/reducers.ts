import { INITIALIZE_ROUTE, UPDATE_ROUTE } from './types';

import { Action } from '..';
import { Animation } from 'velocity-react';

const animationReducer = (state: AnimationState = 'transition.fadeIn', action: Action) => {
  switch (action.type) {
    case INITIALIZE_ROUTE:
      return 'transition.fadeIn';
    case UPDATE_ROUTE:
      return action.previousPath !== action.nextPath ? 'transition.slideDownIn' : state;
    default:
      return state;
  }
};

export type AnimationState = Animation;

export default animationReducer;
