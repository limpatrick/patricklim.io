import { createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import red from '@material-ui/core/colors/red';
import {
  muiAppBar,
  muiButton,
  muiCssBaseline,
  muiFab,
  muiLinearProgress,
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
    primary: { main: grey[500], light: lightBlue[900] },
    success: green['600'],
    type: 'light',
  }),
  overrides: {
    ...muiCssBaseline(grey[200], lightBlue[500]),
    ...muiAppBar(backgroundColor),
    ...muiButton(grey[50], grey[200], grey[600]),
    ...muiFab(grey[50], grey[200]),
    ...muiLinearProgress(lightBlue[50], lightBlue[700]),
    ...muiOutlinedInput('rgba(0, 97, 142, 0.35)', 'rgba(0, 97, 142, 0.45)'),
    ...muiPaper(),
    ...muiTypography(grey[900]),
    ...muiTimelineDot(lightBlue[800]),
  },
});
