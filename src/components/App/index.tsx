import * as React from 'react';

import { AppStyles, appStyles } from './styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WithStyles, withStyles } from 'material-ui/styles';

import AppBackground from './AppBackground';
import AppContent from './AppContent';
import Header from 'components/Header';

interface AppProps {}

const App: React.SFC<AppProps & WithStyles<AppStyles> & RouteComponentProps<{}>> = ({
  classes,
  match,
  location,
  history,
}) => (
  <div className={classes.wrapper}>
    <Header />
    <AppContent />
    <AppBackground />
  </div>
);

export default withRouter(withStyles(appStyles)(App));
