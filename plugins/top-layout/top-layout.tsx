import { SnackbarProvider } from 'notistack';
import React from 'react';
import Footer from '~/components/footer';
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
      <main>{children}</main>
      <Footer />
    </SnackbarProvider>
  </ThemeProvider>
);

export default TopLayout;
