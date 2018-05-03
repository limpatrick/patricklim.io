import { createMuiTheme } from 'material-ui';

export const fontFamily = ['open sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'];

export const altColor = '#fff';
export const defaultColor = 'rgba(0, 0, 0, 0.87)';
export const lightDefaultColor = 'rgba(0, 0, 0, 0.54)';
export const primaryBgColor = '#34373c';
export const primaryColor = '#27d4b5';
export const secondaryColor = '#ff7979';

const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      'spacing-xs-16': {
        width: '100%',
        margin: 0,
      },
    },
    MuiTypography: {
      root: {
        userSelect: 'none',
      },
    },
    MuiTooltip: {
      root: {
        userSelect: 'none',
      },
    },
  },
  typography: {
    fontFamily,
  },
});

export default theme;
