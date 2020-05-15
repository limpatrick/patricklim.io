import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'white',
        },
      },
    },
  },
});

type Props = { children: React.ReactNode };

const TopLayout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    {children}
    // TODO: footer
  </ThemeProvider>
);

export default TopLayout;
