import { createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
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

const backgroundColor = '#282c35';

export default createMuiTheme({
  ...typography(),
  ...palette({
    backgroundDefault: backgroundColor,
    backgroundPaper: backgroundColor,
    error: red.A100,
    primary: { main: grey[500], light: lightBlue[300] },
    success: teal.A400,
    type: 'dark',
  }),
  overrides: {
    ...muiCssBaseline(teal[50], lightBlue[500]),
    ...muiAppBar(backgroundColor),
    ...muiButton(grey[50], grey[200], grey[300]),
    ...muiFab(grey[50], grey[200]),
    ...muiLinearProgress(lightBlue[700], lightBlue[900]),
    ...muiOutlinedInput('rgba(94, 204, 255, 0.35)', 'rgba(94, 204, 255, 0.45)'),
    ...muiPaper(),
    ...muiTypography('#fff'),
    ...muiTimelineDot(lightBlue[500]),
  },
});
