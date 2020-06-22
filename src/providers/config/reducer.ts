import { themeMap } from './themes';
import { Action, SET_PATH, SET_THEME, State } from './types';

export default (state: State, action: Action): State => {
  switch (action.type) {
    case SET_PATH:
      return { ...state, path: action.payload };
    case SET_THEME: {
      const themeKey = action.payload;

      return { ...state, theme: themeMap[themeKey], themeKey };
    }
    default:
      throw new Error(`Unhandled intro's action`);
  }
};
