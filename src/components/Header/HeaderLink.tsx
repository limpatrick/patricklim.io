import * as React from 'react';

import { HeaderLinkStyles, headerLinkStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom';

interface HeaderLinkProps {
  label: string;
  onClick: () => void;
  to: string;
}

const HeaderLink: React.SFC<HeaderLinkProps & WithStyles<HeaderLinkStyles>> = ({ onClick, classes, label, to }) => (
  <NavLink className={classes.navLink} to={to} onClick={onClick}>
    <Button className={classes.button}>{label}</Button>
  </NavLink>
);

export default withStyles(headerLinkStyles)(HeaderLink);
