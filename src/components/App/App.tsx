import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { AppStyles } from './styles';

import Contact from 'components/Contact/Contact';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Scrollbars from 'react-custom-scrollbars';
import Timeline from 'components/Timeline/Timeline';

interface AppProps {}

class App extends React.Component<AppProps & WithStyles<AppStyles>> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <Header />
        <Scrollbars className={classes.content}>
          <div className={classes.container}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/timeline" component={Timeline} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Scrollbars>
        <div className={classes.background} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
