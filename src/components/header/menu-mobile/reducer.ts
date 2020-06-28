import { Action, ON_CALLBACK_CALLED, ON_EXITED, SET_IS_OPEN, State } from './types';

export default (state: State, action: Action): State => {
  switch (action.type) {
    case ON_CALLBACK_CALLED:
      return { ...state, callback: null };
    case ON_EXITED:
      return { ...state, exited: true };
    case SET_IS_OPEN:
      return { ...state, exited: false, isOpen: action.payload, callback: action.meta.callback };
    default:
      throw new Error(`Unhandled intro's action`);
  }
};
