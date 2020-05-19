import { SnackbarProvider } from 'notistack';
import React from 'react';
import Header from '~/components/header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

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
    <SnackbarProvider>
      <Header />
      {children}
      // TODO: footer
    </SnackbarProvider>
  </ThemeProvider>
);

export default TopLayout;
