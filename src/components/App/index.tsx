import * as H from 'history';
import * as React from 'react';

import { AppStyles, appStyles } from './styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WithStyles, withStyles } from 'material-ui/styles';
import { initializeRoute, updateRoute } from 'src/redux/actions';

import Content from 'components/Content';
import Header from 'components/Header';
import { connect } from 'react-redux';

interface AppProps {}

interface AppDispatchToProps {
  initializeCurrentRoute: (location: H.Location) => void;
  updateCurrentRoute: (currentLocation: H.Location, nextPath: string) => void;
}

class App extends React.Component<AppProps & WithStyles<AppStyles> & AppDispatchToProps & RouteComponentProps<{}>> {
  componentWillMount() {
    const { initializeCurrentRoute, location } = this.props;

    initializeCurrentRoute(location);
  }

  render() {
    const { classes, updateCurrentRoute, location } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.background}>
          <Header
            onLinkClick={(nextPath) => {
              updateCurrentRoute(location, nextPath);
            }}
          />
          <Content />
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect<{}, AppDispatchToProps>(null, {
    initializeCurrentRoute: initializeRoute,
    updateCurrentRoute: updateRoute,
  })(withStyles(appStyles)(App))
);
