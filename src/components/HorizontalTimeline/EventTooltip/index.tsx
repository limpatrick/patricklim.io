import * as React from 'react';

import { StyleRules, WithStyles, withStyles } from 'material-ui/styles';

import { EventTooltipStyles } from './styles';
import Tooltip from 'material-ui/Tooltip';
import { omit } from 'lodash';

interface EventTooltipProps {
  open: boolean;
  position: number;
  title: string;
}

const EventTooltip: React.SFC<EventTooltipProps & WithStyles<EventTooltipStyles>> = ({
  classes,
  open,
  position,
  title,
}) => (
  <Tooltip title={title} placement="top" open={open} classes={omit(classes, 'content')}>
    <div style={{ left: position }} className={classes.content} />
  </Tooltip>
);

export default withStyles(EventTooltipStyles as StyleRules<EventTooltipStyles>)(EventTooltip);
