import * as React from 'react';

import Snackbar, { SnackBarOrigin } from 'material-ui/Snackbar';
import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';

import { AlertStyles } from './styles';
import { FaClose } from 'react-icons/lib/fa';
import IconButton from 'material-ui/IconButton';
import Transition from './Transition';
import { omit } from 'lodash';

interface AlertProps {
  autoHideDuration?: number;
  anchorOrigin?: SnackBarOrigin;
  message: string;
  open: boolean;
}

interface AlertState {
  open: boolean;
}

class Alert extends React.Component<AlertProps & WithStyles<AlertStyles>, AlertState> {
  state = {
    open: false,
  };

  handleClose = (event: React.SyntheticEvent<{}>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  }

  componentWillReceiveProps(nextProps: AlertProps & WithStyles<AlertStyles>) {
    const { open } = nextProps;

    this.setState({ open });
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

export default withStyles(AlertStyles as StyleRulesCallback<AlertStyles>)(Alert);
