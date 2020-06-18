import { createMuiTheme } from '@material-ui/core';
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

const backgroundColor = '#282c35';

export default createMuiTheme({
  ...typography(),
  ...palette({
    backgroundDefault: backgroundColor,
    backgroundPaper: backgroundColor,
    error: red.A100,
    primary: { main: grey[500], light: '#fff' },
    success: teal.A400,
    type: 'dark',
  }),
  overrides: {
    ...muiCssBaseline(teal[50], teal[500]),
    ...muiAppBar(backgroundColor),
    ...muiButton(grey[50], grey[200], grey[300]),
    ...muiFab(grey[50], grey[200]),
    ...muiOutlinedInput(grey[500]),
    ...muiPaper(),
    ...muiTypography('#fff'),
    ...muiTimelineDot(teal[200]),
  },
});
