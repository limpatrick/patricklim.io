import { Action, DISPLAY_ACTIVE, DISPLAY_DEFAULT, State } from './types';

export function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case DISPLAY_DEFAULT:
    case DISPLAY_ACTIVE:
      return { ...payload };
    default:
      return state;
  }
}
