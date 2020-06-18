import { ThemeOptions } from '@material-ui/core';

export const typography = (): Record<'typography', ThemeOptions['typography']> => ({
  typography: {
    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
