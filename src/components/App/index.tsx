import * as H from 'history';
import * as React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WithStyles, withStyles } from 'material-ui/styles';
import { initializeRoute, updateRoute } from 'src/redux/animation/actions';

import { AppStyles } from './styles';
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

  handleLinkClick = (nextPath: string) => {
    const { updateCurrentRoute, location } = this.props;

    updateCurrentRoute(location, nextPath);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.background}>
          <Header onLinkClick={this.handleLinkClick} />
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
  })(withStyles(AppStyles)(App))
);
