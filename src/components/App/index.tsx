import * as React from 'react';

import { RouteComponentProps, withRouter } from 'react-router';
import { WithStyles, withStyles } from 'material-ui/styles';

import { AppStyles } from './styles';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Scrollbars from 'react-custom-scrollbars';
import { StoreState } from 'src/redux';
import SwitchRoutes from 'components/SwitchRoutes';
import { connect } from 'react-redux';

interface AppProps {
  selectedId?: string;
}

class App extends React.Component<AppProps & WithStyles<AppStyles> & RouteComponentProps<{}>> {
  private scrollBars: Scrollbars;

  ref = (node: Scrollbars | null) => {
    if (node) {
      this.scrollBars = node;
    }
  }

  componentDidUpdate() {
    this.scrollBars.scrollTop(0);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Header />
        <Scrollbars className={classes.scrollbars} ref={this.ref}>
          <div className={classes.content}>
            <SwitchRoutes />
            <Footer />
          </div>
        </Scrollbars>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): AppProps => ({
  selectedId: state.events.selectedId, // force app to render, in order to scrollTop on event selection
});

export default withRouter(connect(mapStateToProps)(withStyles(AppStyles)(App)));
