import { Action, ON_EXITED, SET_IS_OPEN, State } from './types';

export default (state: State, action: Action): State => {
  switch (action.type) {
    case ON_EXITED:
      return { ...state, callback: state.callback ? null : state.callback, exited: true };
    case SET_IS_OPEN:
      return { ...state, exited: false, isOpen: action.payload, callback: action.meta.callback };
    default:
      throw new Error(`Unhandled intro's action`);
  }
};
