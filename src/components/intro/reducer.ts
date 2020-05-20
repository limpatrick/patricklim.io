import { Action, State, TEXT_ENTERED } from './types';

export const initialState: State = { text1: false, text2: false, text3: false };

export default function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case TEXT_ENTERED: {
      return { ...state, [payload]: true };
    }
    default:
      return state;
  }
}
