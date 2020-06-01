import 'typeface-raleway';
import 'typeface-roboto';
import 'typeface-varela';
import { IntlContextProvider, IntlProvider } from 'gatsby-plugin-intl';
import React from 'react';
import Footer from '~/components/footer';
import Header from '~/components/header';
import NetworkAlert from '~/components/network-alert';
import SnackbarProvider from '~/providers/snackbar';
import { IntlProps } from '~/typings/gatsby-plugin-intl';

type Props = { children: React.ReactNode } & { intl: IntlProps };

const WrapPageElement = ({ children, intl }: Props) => (
  /**
   * workaround see https://github.com/wiziple/gatsby-plugin-intl/issues/116
   */
  <IntlProvider
    locale={intl.language}
    defaultLocale={intl.defaultLanguage}
    messages={intl.messages}
  >
    <IntlContextProvider value={intl}>
      <SnackbarProvider>
        <NetworkAlert />
        <Header path={intl.originalPath} />
        <main>{children}</main>
        <Footer />
      </SnackbarProvider>
    </IntlContextProvider>
  </IntlProvider>
);

export default WrapPageElement;
