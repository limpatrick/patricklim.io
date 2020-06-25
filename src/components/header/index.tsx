import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import BackTop from './back-top';
import Logo from './logo';
import MenuDesktop from './menu-desktop';
import MenuMobile from './menu-mobile';
import { HeaderProvider } from './provider';

const Header = () => (
  <HeaderProvider>
    {({ trigger }, { classnames }) => (
      <>
        <AppBar color={trigger ? 'primary' : 'transparent'} elevation={trigger ? 4 : 0}>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item>
                <Logo className={classnames()} />
              </Grid>
              <Grid container justify="flex-end" item xs>
                <MenuDesktop />
                <MenuMobile />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <BackTop />
      </>
    )}
  </HeaderProvider>
);

export default Header;
