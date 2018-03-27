import * as React from 'react';

import { BackgroundStyles, backgroundStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

interface BackgroundProps {}

const Background: React.SFC<BackgroundProps & WithStyles<BackgroundStyles>> = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.background} />
  </div>
);

export default withStyles(backgroundStyles)(Background);
