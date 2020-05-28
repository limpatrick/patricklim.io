import { duration, easing, ThemeOptions } from '@material-ui/core';

export default {
  typography: {
    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          '&, & *': {
            transition: `background-color ${duration.complex / 1000}s ${easing.sharp}`,
          },
        },
      },
    },
  },
} as ThemeOptions;
