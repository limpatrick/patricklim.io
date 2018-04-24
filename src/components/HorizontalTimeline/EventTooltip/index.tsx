import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { EventTooltipStyles } from './styles';
import Tooltip from 'material-ui/Tooltip';

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
  <Tooltip title={title} placement="top" open={open}>
    <div style={{ left: position }} className={classes.content} />
  </Tooltip>
);

export default withStyles(EventTooltipStyles)(EventTooltip);
