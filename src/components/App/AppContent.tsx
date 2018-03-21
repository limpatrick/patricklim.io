import * as React from 'react';

import { AppContentStyles, appContentStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

import AppSwitchRoutes from './AppSwitchRoutes';
import Scrollbars from 'react-custom-scrollbars';

interface AppContentProps {}

const AppContent: React.SFC<AppContentProps & WithStyles<AppContentStyles>> = ({ classes }) => (
  <div className={classes.content}>
    <Scrollbars className={classes.scrollbars}>
      <AppSwitchRoutes />
    </Scrollbars>
  </div>
);

export default withStyles(appContentStyles)(AppContent);
