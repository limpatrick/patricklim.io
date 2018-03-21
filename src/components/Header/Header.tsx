import * as React from 'react';

import { HeaderStyles, headerStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import HeaderLink from './HeaderLink';
import Toolbar from 'material-ui/Toolbar';

interface HeaderProps {}

const Header: React.SFC<HeaderProps & WithStyles<HeaderStyles>> = ({ classes }) => (
  <AppBar className={classes.appBar} color="primary">
    <Toolbar className={classes.toolbar}>
      <HeaderLink to="/" label="Home" />
      <HeaderLink to="/timeline" label="Timeline" />
      <HeaderLink to="/contact" label="Contact" />
    </Toolbar>
  </AppBar>
);

export default withStyles(headerStyles)(Header);
