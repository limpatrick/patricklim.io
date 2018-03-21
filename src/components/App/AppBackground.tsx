import * as React from 'react';

import { AppBackgroundStyles, appBackgroundStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

interface AppBackgroundProps {}

const AppBackground: React.SFC<AppBackgroundProps & WithStyles<AppBackgroundStyles>> = ({ classes }) => (
  <div className={classes.background} />
);

export default withStyles(appBackgroundStyles)(AppBackground);
