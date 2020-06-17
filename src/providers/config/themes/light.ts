import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import muiTransitions from '@material-ui/core/styles/transitions';
import { mergeDeepRight } from 'ramda';
import base, { transitions } from './base';

const backgroundColor = '#fff';
const nprogressColor = grey.A100;

export default createMuiTheme(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mergeDeepRight<any, ThemeOptions>(base, {
    palette: {
      primary: grey,
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
            backgroundColor: grey[200],
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
      MuiButton: {
        root: {
          '&$contained': {
            '&$containedPrimary': {
              backgroundColor: grey[50],
            },
          },
          '&$textPrimary': {
            color: grey[600],
          },
        },
      },
      MuiFab: {
        root: {
          backgroundColor: grey[50],
          '&:hover': {
            backgroundColor: grey[200],
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          '&:hover $notchedOutline': {
            borderColor: grey[500],
          },
        },
      },
      MuiTypography: {
        root: {
          '&$colorPrimary': {
            color: grey[600],
          },
        },
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      MuiTimelineDot: {
        root: {
          '&$defaultPrimary': {
            backgroundColor: grey[900],
          },
        },
      },
    },
  })
);
