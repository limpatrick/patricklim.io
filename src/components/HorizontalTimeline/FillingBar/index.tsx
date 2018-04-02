import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { FillingBarStyles } from './styles';
import { LinearProgress } from 'material-ui/Progress';

interface FillingBarProps {
  value: number;
}

const FillingBar: React.SFC<FillingBarProps & WithStyles<FillingBarStyles>> = ({ classes, value }) => {
  return (
    <div className={classes.container}>
      <LinearProgress className={classes.bar} variant="determinate" value={value} />
    </div>
  );
};

export default withStyles(FillingBarStyles)(FillingBar);
