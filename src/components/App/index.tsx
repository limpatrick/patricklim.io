import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { AppStyles } from './styles';
import Content from 'components/Content';
import Header from 'components/Header';

interface AppProps {}

const App: React.SFC<AppProps & WithStyles<AppStyles>> = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.background}>
      <Header />
      <Content />
    </div>
  </div>
);

export default withStyles(AppStyles)(App);
