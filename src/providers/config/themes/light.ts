import { createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import {
  muiAppBar,
  muiButton,
  muiCssBaseline,
  muiFab,
  muiOutlinedInput,
  muiPaper,
  muiTimelineDot,
  muiTypography,
  palette,
  typography,
} from '~/helpers/theme';

const backgroundColor = '#fff';

export default createMuiTheme({
  ...typography(),
  ...palette({
    backgroundDefault: backgroundColor,
    backgroundPaper: backgroundColor,
    error: red['400'],
    primary: { main: grey[500], light: grey[900] },
    success: green['600'],
    type: 'light',
  }),
  overrides: {
    ...muiCssBaseline(grey[200], teal[200]),
    ...muiAppBar(backgroundColor),
    ...muiButton(grey[50], grey[200], grey[600]),
    ...muiFab(grey[50], grey[200]),
    ...muiOutlinedInput(grey[500]),
    ...muiPaper(),
    ...muiTypography(grey[900]),
    ...muiTimelineDot(teal.A700),
  },
});
