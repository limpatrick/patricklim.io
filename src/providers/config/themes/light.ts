import { createMuiTheme, lighten } from '@material-ui/core';
import { COLOR_DARK, COLOR_ERROR, COLOR_LIGHT, COLOR_SUCCESS } from '~/constants';
import {
  muiAppBar,
  muiCssBaseline,
  muiOutlinedInput,
  muiPaper,
  muiTimelineDot,
  palette,
  typography,
} from '~/helpers/theme';

const backgroundColor = '#fff';

export default createMuiTheme({
  ...typography(),
  ...palette({
    backgroundDefault: backgroundColor,
    backgroundPaper: backgroundColor,
    error: COLOR_ERROR,
    primary: COLOR_DARK,
    success: COLOR_SUCCESS,
    type: 'light',
  }),
  overrides: {
    ...muiCssBaseline(lighten(COLOR_LIGHT, 0.62), COLOR_DARK),
    ...muiAppBar(backgroundColor),
    ...muiOutlinedInput(lighten(COLOR_DARK, 0.5)),
    ...muiPaper(),
    ...muiTimelineDot(COLOR_LIGHT),
  },
});
