import * as React from 'react';

import { IoCodeWorking, IoEmail, IoSocialGithub, IoSocialLinkedin } from 'react-icons/lib/io';
import { WithStyles, withStyles } from 'material-ui/styles';
import withRoutes, { WithRoutesInjectedProps } from 'components/containers/withRoutes';

import AppBar from 'material-ui/AppBar';
import { HeaderStyles } from './styles';
import IconButton from 'material-ui/IconButton';
import IconLink from 'components/IconLink';
import IconNav from 'components/IconNav';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

interface HeaderProps {}

const Header: React.SFC<HeaderProps & WithStyles<HeaderStyles> & WithRoutesInjectedProps> = ({ classes, routes }) => {
  const homeRoute = routes[0];
  const timelineRoute = routes[1];

  return (
    <AppBar className={classes.appBar} color="primary">
      <Toolbar className={classes.toolbar}>
        <IconNav title="Patrick LIM" to={homeRoute.path}>
          <Typography variant="title">PL</Typography>
        </IconNav>
        <IconNav className={classes.flex} title="Timeline" to={timelineRoute.path}>
          <IconButton disableRipple>
            <IoCodeWorking />
          </IconButton>
        </IconNav>
        <IconLink href="mailto:contact@patricklim.fr" title="Contact me at contact@patricklim.fr">
          <IoEmail />
        </IconLink>
        <IconLink href="https://github.com/limpatrick" target="_blank" title="github.com/limpatrick">
          <IoSocialGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/lim-patrick/" target="_blank" title="linkedin.com/in/lim-patrick">
          <IoSocialLinkedin />
        </IconLink>
      </Toolbar>
    </AppBar>
  );
};

export default withRoutes(withStyles(HeaderStyles)(Header));
