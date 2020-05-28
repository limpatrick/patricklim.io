import { Theme } from '@material-ui/core';
import dark from './dark';
import light from './light';

export type ThemeKey = 'light' | 'dark';

const themeMap: Record<ThemeKey, Theme> = {
  light: light,
  dark: dark,
};

export { light, dark, themeMap };
