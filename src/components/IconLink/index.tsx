import * as React from 'react';

import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';
import { IconLinkStyles } from './styles';
import Link from 'components/Link';
import Tooltip from 'material-ui/Tooltip';
import { omit } from 'lodash';

interface IconLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  title: string;
}

const IconLink: React.SFC<IconLinkProps & WithStyles<IconLinkStyles>> = (props) => {
  const { classes, className, title } = props;
  const tooltipClasses = omit(classes, 'iconButton');
  const rest = { ...omit(props, ['classes', 'className', 'theme', 'title']) };

  return (
    <Tooltip title={title} classes={tooltipClasses} className={className}>
      <IconButton component={Link} disableRipple {...rest} className={classes.iconButton} />
    </Tooltip>
  );
};

export default withStyles(IconLinkStyles as StyleRulesCallback<IconLinkStyles>)(IconLink);
