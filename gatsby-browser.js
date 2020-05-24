import 'typeface-raleway';
import 'typeface-roboto';
import 'typeface-varela';
import { IntlContextProvider, IntlProvider } from 'gatsby-plugin-intl';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import Footer from '~/components/footer';
import Header from '~/components/header';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './src/theme';

export const wrapPageElement = ({
  element,
  props: {
    pageContext: { intl },
  },
}) => (
  /**
   * workaround see https://github.com/wiziple/gatsby-plugin-intl/issues/116
   */
  <IntlProvider locale={intl.language} defaultLocale={intl.defaultLocale} messages={intl.messages}>
    <IntlContextProvider value={intl}>
      <Header path={intl.originalPath} />
      <main>{element}</main>
      <Footer />
    </IntlContextProvider>
  </IntlProvider>
);

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SnackbarProvider>{element}</SnackbarProvider>
  </ThemeProvider>
);
