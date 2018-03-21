import * as React from 'react';

import { AppContainerStyles, appContainerStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

interface AppContainerProps {}

const AppContainer: React.SFC<AppContainerProps & WithStyles<AppContainerStyles>> = ({ classes, children }) => (
  <div className={classes.container}>{children}</div>
);

export default withStyles(appContainerStyles)(AppContainer);
