import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { EventStyles } from './styles';
import { FaCircle } from 'react-icons/lib/fa';
import IconButton from 'material-ui/IconButton';
import { Moment } from 'moment';
import Typography from 'material-ui/Typography';

interface EventProps {
  date: Moment;
  position: number;
}

const Event: React.SFC<EventProps & WithStyles<EventStyles>> = ({ classes, date, position }) => {
  return (
    <div className={classes.container} style={{ left: position }}>
      <Typography component="p" variant="caption">
        {date.format('D MMM')}
      </Typography>
      <IconButton aria-label={date.format('D MMM')} className={classes.button}>
        <FaCircle />
      </IconButton>
    </div>
  );
};

export default withStyles(EventStyles)(Event);
