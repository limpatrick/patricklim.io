import { mergeDeepRight } from 'ramda';
import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import base from './base';

export default createMuiTheme(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mergeDeepRight<any, ThemeOptions>(base, {
    palette: {
      primary: blueGrey,
      background: {
        default: '#fff',
      },
      error: {
        main: red['400'],
      },
      success: {
        main: green['600'],
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '::selection': {
            background: blueGrey['A100'],
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          '&:hover $notchedOutline': {
            borderColor: blueGrey['A200'],
          },
        },
      },
    },
  })
);
