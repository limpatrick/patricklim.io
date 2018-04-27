import * as React from 'react';

import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';

import { IconNavStyles } from './styles';
import { NavLink } from 'react-router-dom';
import Tooltip from 'material-ui/Tooltip';
import { omit } from 'lodash';

interface IconNavProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  to: string;
}

const IconNav: React.SFC<IconNavProps & WithStyles<IconNavStyles>> = (props) => {
  const { classes, className, title } = props;
  const tooltipClasses = omit(classes, 'navLink');
  const rest = omit(props, ['classes', 'className', 'theme', 'title']);

  return (
    <Tooltip title={title} classes={tooltipClasses} className={className}>
      <NavLink className={classes.navLink} {...rest} />
    </Tooltip>
  );
};

export default withStyles(IconNavStyles as StyleRulesCallback<IconNavStyles>)(IconNav);
