import * as React from 'react';

import { HeaderStyles, headerStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';
import withRoutes, { WithRoutesInjectedProps } from 'components/containers/withRoutes';

import AppBar from 'material-ui/AppBar';
import HeaderLink from './HeaderLink';
import Toolbar from 'material-ui/Toolbar';

interface HeaderProps {
  onLinkClick: (path: string) => void;
}

const Header: React.SFC<HeaderProps & WithStyles<HeaderStyles> & WithRoutesInjectedProps> = ({
  classes,
  onLinkClick,
  routes,
}) => (
  <AppBar className={classes.appBar} color="primary">
    <Toolbar className={classes.toolbar}>
      {routes.map(({ path, label }, key) => (
        <HeaderLink to={path} label={label} key={key} onClick={() => onLinkClick(path)} />
      ))}
    </Toolbar>
  </AppBar>
);

export default withRoutes(withStyles(headerStyles)(Header));
