import * as React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/lib/fa';
import { WithStyles, withStyles } from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';
import { NavigationStyles } from './styles';

interface NavigationProps {
  disabled: boolean;
  onClick: (type: NavigationType) => void;
  type: NavigationType;
}

class Navigation extends React.Component<NavigationProps & WithStyles<NavigationStyles>> {
  handleClick = () => {
    const { onClick, type } = this.props;

    onClick(type);
  }

  render() {
    const { classes, disabled, type } = this.props;
    const Chevron = type === 'previous' ? FaChevronLeft : FaChevronRight;

    return (
      <div className={classes.container}>
        <IconButton aria-label={type} onClick={this.handleClick} disabled={disabled}>
          <Chevron />
        </IconButton>
      </div>
    );
  }
}

export type NavigationType = 'previous' | 'next';

export default withStyles(NavigationStyles)(Navigation);
