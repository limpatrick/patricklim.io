import { setItem, THEME_KEY } from '~/utils/local-storage';
import { themeMap } from './themes';
import { Action, SET_THEME, State, TOGGLE_THEME } from './types';

export const initialState: State = { theme: themeMap.light, themeKey: 'light' };

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case SET_THEME: {
      const themeKey = action.payload;

      return { ...state, theme: themeMap[action.payload], themeKey };
    }
    case TOGGLE_THEME: {
      const themeKey = state.themeKey === 'light' ? 'dark' : 'light';

      setItem(THEME_KEY, themeKey);

      return { ...state, theme: themeMap[themeKey], themeKey };
    }
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
}
