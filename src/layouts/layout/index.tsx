import React from 'react';
import Footer from '~/components/footer';
import Header from '~/components/header';
import NetworkAlert from '~/components/network-alert';
import SEO from '~/components/seo';
import { ID_MAIN } from '~/constants';
import SnackbarProvider from '~/providers/snackbar';
import useStyles from './styles';

type Props = React.ComponentProps<typeof SEO> & { children: React.ReactNode };

const Layout = ({ children, ...seoProps }: Props) => {
  const classes = useStyles();

  return (
    <SnackbarProvider>
      <SEO {...seoProps} />
      <NetworkAlert />
      <Header />
      <main id={ID_MAIN} className={classes.main}>
        {children}
      </main>
      <Footer />
    </SnackbarProvider>
  );
};

export default Layout;
