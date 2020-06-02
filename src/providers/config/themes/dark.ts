import { createMuiTheme, darken, lighten, ThemeOptions } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import muiTransitions from '@material-ui/core/styles/transitions';
import { mergeDeepRight } from 'ramda';
import base, { transitions } from './base';

const backgroundColor = grey['900'];
const nprogressColor = grey['700'];

export default createMuiTheme(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mergeDeepRight<any, ThemeOptions>(base, {
    palette: {
      type: 'dark',
      background: {
        default: backgroundColor,
        paper: darken(backgroundColor, 0.05),
      },
      primary: {
        main: grey['300'],
      },
      error: {
        main: red.A100,
      },
      success: {
        main: teal.A400,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '::selection': {
            background: grey['200'],
          },
          body: {
            '& #nprogress': {
              '& .bar': {
                backgroundColor: nprogressColor,
              },
              '& .peg': {
                boxShadow: `0 0 10px ${nprogressColor}, 0 0 5px ${nprogressColor}`,
              },
              '& .spinner-icon': {
                borderTopColor: nprogressColor,
                borderLeftColor: nprogressColor,
              },
            },
          },
        },
      },
      MuiAppBar: {
        root: {
          transition: [muiTransitions.create('box-shadow'), transitions.backgroundColor].join(', '),
          '&$colorPrimary': {
            backgroundColor,
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          '&:hover $notchedOutline': {
            borderColor: lighten(backgroundColor, 0.5),
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