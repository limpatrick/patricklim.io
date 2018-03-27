import * as React from 'react';

import { AppStyles, appStyles } from './styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WithStyles, withStyles } from 'material-ui/styles';

import Background from 'components/Background';
import Content from 'components/Content';
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
    <Content />
    <Background />
  </div>
);

export default withRouter(withStyles(appStyles)(App));
