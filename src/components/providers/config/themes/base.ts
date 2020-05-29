import { duration, ThemeOptions } from '@material-ui/core';
import muiTransitions from '@material-ui/core/styles/transitions';

export const transitions = {
  backgroundColor: muiTransitions.create('background-color', { duration: duration.complex }),
};

export default {
  typography: {
    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          '&, & *': {
            transition: transitions.backgroundColor,
          },
        },
      },
    },
    MuiPaper: {
      root: {
        transition: [muiTransitions.create('box-shadow'), transitions.backgroundColor].join(', '),
      },
    },
  },
} as ThemeOptions;
