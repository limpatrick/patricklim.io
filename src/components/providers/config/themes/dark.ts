import { mergeDeepRight } from 'ramda';
import { createMuiTheme, darken, lighten, ThemeOptions } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import base from './base';

export default createMuiTheme(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mergeDeepRight<any, ThemeOptions>(base, {
    palette: {
      type: 'dark',
      background: {
        default: grey['900'],
        paper: darken(grey['900'], 0.05),
      },
      primary: {
        main: grey['300'],
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
            background: grey['200'],
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          '&:hover $notchedOutline': {
            borderColor: lighten(grey['900'], 0.5),
          },
        },
      },
      MuiTypography: {
        colorPrimary: {
          color: grey['400'],
        },
      },
    },
  })
);
