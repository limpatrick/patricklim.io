import * as React from 'react';

import { HeaderLinkStyles, headerLinkStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom';

interface HeaderLinkProps {
  to: string;
  label: string;
}

const HeaderLink: React.SFC<HeaderLinkProps & WithStyles<HeaderLinkStyles>> = ({ to, label, classes }) => (
  <NavLink className={classes.navLink} to={to}>
    <Button className={classes.button}>{label}</Button>
  </NavLink>
);

export default withStyles(headerLinkStyles)(HeaderLink);
