import { Theme } from '@material-ui/core';
import { ThemeKey } from './themes';

export const SET_THEME = 'SET_THEME';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export type SetThemeAction = {
  type: typeof SET_THEME;
  payload: ThemeKey;
};

export type ToggleThemeAction = {
  type: typeof TOGGLE_THEME;
};

export type Action = SetThemeAction | ToggleThemeAction;
export type Dispatch = (action: Action) => void;
export type State = { theme: Theme; themeKey: ThemeKey };
