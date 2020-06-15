import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';
import BackTop from './back-top';
import MenuDesktop from './menu-desktop';
import MenuMobile from './menu-mobile';

const Header = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <>
      <AppBar color={trigger ? 'primary' : 'transparent'} elevation={trigger ? 4 : 0}>
        <Toolbar>
          <Grid container justify="flex-end" alignItems="center">
            <MenuDesktop />
            <MenuMobile />
          </Grid>
        </Toolbar>
      </AppBar>
      <BackTop trigger={trigger} />
    </>
  );
};

export default Header;
