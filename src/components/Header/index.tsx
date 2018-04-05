import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import withRoutes, { WithRoutesInjectedProps } from 'components/containers/withRoutes';

import AppBar from 'material-ui/AppBar';
import HeaderLink from './HeaderLink';
import { HeaderStyles } from './styles';
import Toolbar from 'material-ui/Toolbar';

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

    return (
      <AppBar className={classes.appBar} color="primary">
        <Toolbar className={classes.toolbar}>
          {routes.map(({ path, label }, key) => (
            <HeaderLink to={path} label={label} key={key} onClick={this.handleLinkClick(path)} />
          ))}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRoutes(withStyles(HeaderStyles)(Header));
