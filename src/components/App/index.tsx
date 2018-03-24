import * as React from 'react';

import { AppStyles, appStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

import AppBackground from './AppBackground';
import AppContent from './AppContent';
import Header from 'components/Header';

interface AppProps {}

const App: React.SFC<AppProps & WithStyles<AppStyles>> = ({ classes }) => (
  <div className={classes.wrapper}>
    <Header />
    <AppContent />
    <AppBackground />
  </div>
);

export default withStyles(appStyles)(App);
