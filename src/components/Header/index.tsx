import * as React from 'react';

import { IoCodeWorking, IoEmail } from 'react-icons/lib/io';
import { WithStyles, withStyles } from 'material-ui/styles';
import withRoutes, { WithRoutesInjectedProps } from 'components/containers/withRoutes';

import AppBar from 'material-ui/AppBar';
import { HeaderStyles } from './styles';
import IconButton from 'material-ui/IconButton';
import IconLink from 'components/IconLink';
import IconNav from 'components/IconNav';
import Logo from 'components/logo';
import { NavLink } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

interface HeaderProps {}

const Header: React.SFC<HeaderProps & WithStyles<HeaderStyles> & WithRoutesInjectedProps> = ({ classes, routes }) => {
  const homeRoute = routes[0];
  const timelineRoute = routes[1];

  return (
    <AppBar className={classes.appBar} position="absolute">
      <Toolbar className={classes.toolbar}>
        <div className={classes.flex}>
          <NavLink to={homeRoute.path} className={classes.logo}>
            <Logo />
            <Typography component="span" variant="subheading">
              Patrick Lim
            </Typography>
          </NavLink>
        </div>
        <div className={classes.icons}>
          <IconNav title="Timeline" to={timelineRoute.path}>
            <IconButton component="span" disableRipple>
              <IoCodeWorking />
            </IconButton>
          </IconNav>
          <IconLink href="mailto:contact@patricklim.fr" title="Contact me at contact@patricklim.fr">
            <IoEmail />
          </IconLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRoutes(withStyles(HeaderStyles)(Header));
