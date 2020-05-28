import { mergeDeepRight } from 'ramda';
import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import base from './base';

export default createMuiTheme(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mergeDeepRight<any, ThemeOptions>(base, {
    palette: {
      type: 'dark',
      background: {
        default: '#212121',
        paper: '#242424',
      },
      primary: {
        main: '#e0e0e0',
      },
      error: {
        main: red['A100'],
      },
      success: {
        main: teal['A400'],
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '::selection': {
            background: '#eeeeee',
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          '&:hover $notchedOutline': {
            borderColor: '#8d8d8d',
          },
        },
      },
      MuiTypography: {
        colorPrimary: {
          color: '#bdbdbd',
        },
      },
    },
  })
);
