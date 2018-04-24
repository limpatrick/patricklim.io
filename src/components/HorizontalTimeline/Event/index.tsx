import * as React from 'react';

import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';

import { EventStyles } from './styles';
import { FaCircle } from 'react-icons/lib/fa';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { Moment } from 'moment';
import Typography from 'material-ui/Typography';
import { omit } from 'lodash';

interface EventProps {
  active: boolean;
  date: Moment;
  older: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  position: number;
  title: string;
}

const Event: React.SFC<EventProps & WithStyles<EventStyles>> = ({
  active,
  classes,
  date,
  older,
  onClick,
  onMouseEnter,
  onMouseLeave,
  position,
  title,
}) => {
  const activeClassName = active ? classes.active : '';
  const olderClassName = older ? classes.older : '';
  const className = `${activeClassName} ${olderClassName}`;

  return (
    <IconButton
      classes={omit(classes, ['active', 'older', 'icon', 'typography'])}
      className={className}
      style={{ left: position }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disableRipple>
      <Typography className={classes.typography} component="span" variant="caption">
        {date.format('MMM')}
      </Typography>
      <Icon className={classes.icon} aria-label={date.format('MMM')}>
        <FaCircle />
      </Icon>
    </IconButton>
  );
};

export default withStyles(EventStyles as StyleRulesCallback<EventStyles>)(Event);
