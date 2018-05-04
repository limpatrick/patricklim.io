import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import withVelocityOnComplete, {
  WithVelocityOnCompleteInjectedProps,
  handler,
} from 'components/containers/velocity/withVelocityOnComplete';

import { AppStyles } from './styles';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Scrollbars from 'react-custom-scrollbars';
import SwitchRoutes from 'components/SwitchRoutes';

interface AppProps {}

class App extends React.Component<AppProps & WithStyles<AppStyles> & WithVelocityOnCompleteInjectedProps> {
  constructor(props: AppProps & WithStyles<AppStyles> & WithVelocityOnCompleteInjectedProps) {
    super(props);

    const { onVelocityComplete } = this.props;

    onVelocityComplete(this.onVelocityComplete);
  }

  private onVelocityComplete = () => {
    this.setState({ noMinHeight: true });
  }

  componentWillUnmount() {
    handler.removeCallback(this.onVelocityComplete);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Header />
        <Scrollbars className={classes.scrollbars}>
          <div className={classes.content}>
            <SwitchRoutes />
            <Footer />
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default withVelocityOnComplete(withStyles(AppStyles)(App));
