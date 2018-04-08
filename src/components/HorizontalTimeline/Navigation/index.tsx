import * as React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/lib/fa';

import IconButton from 'material-ui/IconButton';

interface NavigationProps {
  disabled: boolean;
  onClick: (type: NavigationType) => void;
  type: NavigationType;
}

class Navigation extends React.Component<NavigationProps> {
  handleClick = () => {
    const { onClick, type } = this.props;

    onClick(type);
  }

  render() {
    const { disabled, type } = this.props;
    const Chevron = type === 'previous' ? FaChevronLeft : FaChevronRight;

    return (
      <div>
        <IconButton aria-label={type} onClick={this.handleClick} disabled={disabled}>
          <Chevron />
        </IconButton>
      </div>
    );
  }
}

export type NavigationType = 'previous' | 'next';

export default Navigation;
