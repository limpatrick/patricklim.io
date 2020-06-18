import { Theme } from '@material-ui/core';
import { ThemeKey } from './themes';

export const SET_PATH = 'SET_PATH';
export const SET_THEME = 'SET_THEME';

export type SetPathAction = {
  type: typeof SET_PATH;
  payload: string;
};

export type SetThemeAction = {
  type: typeof SET_THEME;
  payload: ThemeKey;
};

export type Action = SetPathAction | SetThemeAction;
export type Actions = {
  setPath: (path: string) => void;
  setTheme: (theme: ThemeKey) => void;
  toggleTheme: () => void;
};
export type State = { path: string | null; theme: Theme; themeKey: ThemeKey };
