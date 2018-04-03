import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { EventStyles } from './styles';
import { FaCircle } from 'react-icons/lib/fa';
import IconButton from 'material-ui/IconButton';
import { Moment } from 'moment';
import Typography from 'material-ui/Typography';

interface EventProps {
  active: boolean;
  date: Moment;
  older: boolean;
  onClick: () => void;
  position: number;
}

const Event: React.SFC<EventProps & WithStyles<EventStyles>> = ({
  active,
  classes,
  date,
  older,
  onClick,
  position,
}) => {
  const activeClassName = active ? classes.active : '';
  const olderClassName = older ? classes.older : '';
  const className = `${classes.button} ${activeClassName} ${olderClassName}`;

  return (
    <div className={classes.container} style={{ left: position }}>
      <Typography className={classes.typography} component="p" variant="caption">
        {date.format('D MMM')}
      </Typography>
      <IconButton className={className} aria-label={date.format('D MMM')} onClick={onClick}>
        <FaCircle />
      </IconButton>
    </div>
  );
};

export default withStyles(EventStyles)(Event);
