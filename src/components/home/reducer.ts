import { Action, State, TEXT_ENTERED } from './types';

export const initialState: State = { text1: false, text2: false, text3: false };

export default (state: State, action: Action): State => {
  switch (action.type) {
    case TEXT_ENTERED:
      return { ...state, [action.payload]: true };
    default:
      throw new Error(`Unhandled intro's action`);
  }
};
