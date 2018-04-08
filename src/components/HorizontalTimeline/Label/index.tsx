import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { LabelStyles } from './styles';
import Typography from 'material-ui/Typography';

interface LabelProps {
  text: string;
  position: number;
}

const Label: React.SFC<LabelProps & WithStyles<LabelStyles>> = ({ classes, text, position }) => {
  return (
    <div className={classes.container} style={{ left: position }}>
      <Typography component="p" variant="caption" className={classes.typography}>
        {text}
      </Typography>
    </div>
  );
};

export default withStyles(LabelStyles)(Label);
