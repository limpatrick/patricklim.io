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

interface HeaderProps {
  onLinkClick: (path: string) => void;
}

class Header extends React.Component<HeaderProps & WithStyles<HeaderStyles> & WithRoutesInjectedProps> {
  handleLinkClick = (path: string) => () => {
    const { onLinkClick } = this.props;

    onLinkClick(path);
  }

  render() {
    const { classes, routes } = this.props;
    const homeRoute = routes[0];
    const timelineRoute = routes[1];

    return (
      <AppBar className={classes.appBar} color="primary">
        <Toolbar className={classes.toolbar}>
          <IconNav onClick={this.handleLinkClick(homeRoute.path)} title="Patrick LIM" to={homeRoute.path}>
            <Typography variant="title">PL</Typography>
          </IconNav>
          <IconNav
            className={classes.flex}
            onClick={this.handleLinkClick(timelineRoute.path)}
            title="Timeline"
            to={timelineRoute.path}>
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
  }
}

export default withRoutes(withStyles(HeaderStyles)(Header));
