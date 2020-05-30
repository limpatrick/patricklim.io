import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import muiTransitions from '@material-ui/core/styles/transitions';
import { mergeDeepRight } from 'ramda';
import base, { transitions } from './base';

const backgroundColor = '#fff';
const nprogressColor = blueGrey['700'];

export default createMuiTheme(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mergeDeepRight<any, ThemeOptions>(base, {
    palette: {
      primary: blueGrey,
      background: {
        default: backgroundColor,
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
            background: blueGrey.A100,
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
      MuiCardHeader: {
        root: {
          backgroundColor: grey['50'],
        },
      },
      MuiOutlinedInput: {
        root: {
          '&:hover $notchedOutline': {
            borderColor: blueGrey.A200,
          },
        },
      },
    },
  })
);
