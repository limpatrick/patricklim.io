import { ThemeKey } from './themes';
import { SET_PATH, SET_THEME, SetPathAction, SetThemeAction } from './types';

export const setPath = (path: string): SetPathAction => ({
  type: SET_PATH,
  payload: path,
});

export const setTheme = (theme: ThemeKey): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});
