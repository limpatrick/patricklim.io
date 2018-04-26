import * as React from 'react';

import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';
import { IconLinkStyles } from './styles';
import Link from 'components/Link';
import Tooltip from 'material-ui/Tooltip';
import { omit } from 'lodash';

interface IconLinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
  title: string;
}

const IconLink: React.SFC<IconLinkProps & WithStyles<IconLinkStyles>> = (props) => {
  const { classes, title } = props;
  const tooltipClasses = omit(classes, 'iconButton');
  const rest = { ...omit(props, ['classes', 'theme', 'title']) };

  return (
    <Tooltip title={title} classes={tooltipClasses}>
      <IconButton component={Link} disableRipple {...rest} className={classes.iconButton} />
    </Tooltip>
  );
};

export default withStyles(IconLinkStyles as StyleRulesCallback<IconLinkStyles>)(IconLink);
