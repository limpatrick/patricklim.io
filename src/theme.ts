import { createMuiTheme } from 'material-ui';

export const fontFamily = ['open sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'];

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily,
  },
});

export default theme;
