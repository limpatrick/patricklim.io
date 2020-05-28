import 'typeface-raleway';
import 'typeface-roboto';
import 'typeface-varela';
import { IntlContextProvider, IntlProvider } from 'gatsby-plugin-intl';
import React from 'react';
import Footer from '~/components/footer';
import Header from '~/components/header';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConfigProvider } from './src/components/providers/config';
import SnackbarProvider from './src/components/providers/snackbar';

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
  <ConfigProvider>
    {([{ theme }]) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>{element}</SnackbarProvider>
      </ThemeProvider>
    )}
  </ConfigProvider>
);
