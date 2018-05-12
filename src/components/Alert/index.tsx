import * as React from 'react';

import Snackbar, { SnackBarOrigin } from 'material-ui/Snackbar';
import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';
import { isEqual, omit } from 'lodash';
import withVelocityOnComplete, {
  WithVelocityOnCompleteInjectedProps,
  handler,
} from 'components/containers/velocity/withVelocityOnComplete';

import { AlertStyles } from './styles';
import { FaClose } from 'react-icons/lib/fa';
import IconButton from 'material-ui/IconButton';
import Transition from './Transition';

interface AlertProps {
  autoHideDuration?: number;
  anchorOrigin?: SnackBarOrigin;
  message: string;
}

interface AlertState {
  open: boolean;
}

class Alert extends React.Component<
  AlertProps & WithStyles<AlertStyles> & WithVelocityOnCompleteInjectedProps,
  AlertState
> {
  constructor(props: AlertProps & WithStyles<AlertStyles> & WithVelocityOnCompleteInjectedProps) {
    super(props);

    const { onVelocityComplete } = this.props;

    this.state = {
      open: false,
    };

    this.showAlert = this.showAlert.bind(this);
    onVelocityComplete(this.showAlert);
  }

  private showAlert = () => {
    this.setState({ open: true });
  }

  handleClose = (event: React.SyntheticEvent<{}>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  }

  componentWillUnmount() {
    handler.removeCallback(this.showAlert);
  }

  shouldComponentUpdate(
    nextProps: AlertProps & WithStyles<AlertStyles> & WithVelocityOnCompleteInjectedProps,
    nextState: AlertState
  ) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    const { open } = this.state;
    const { autoHideDuration, anchorOrigin, classes, message } = this.props;

    return (
      <Snackbar
        classes={omit(classes, ['close'])}
        action={[
          <IconButton
            aria-label="Close"
            className={classes.close}
            color="inherit"
            key="close"
            onClick={this.handleClose}>
            <FaClose />
          </IconButton>,
        ]}
        anchorOrigin={anchorOrigin}
        autoHideDuration={autoHideDuration}
        message={<span>{message}</span>}
        onClose={this.handleClose}
        open={open}
        transition={Transition}
      />
    );
  }
}

export default withVelocityOnComplete(withStyles(AlertStyles as StyleRulesCallback<AlertStyles>)(Alert));
