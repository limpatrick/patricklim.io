import { ThemeKey } from './themes';
import { SET_THEME, SetThemeAction, TOGGLE_THEME, ToggleThemeAction } from './types';

export const setTheme = (theme: ThemeKey): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});

export const toggleTheme = (): ToggleThemeAction => ({
  type: TOGGLE_THEME,
});
