import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { CollapsibleTextStyles } from './styles';
import withMuiTypography, { WithMuiTypographyInjectedProps } from '../containers/withMuiTypography';

import { ClassNameMap } from 'material-ui/styles/withStyles';

const splitText = (text: string, classes: ClassNameMap<CollapsibleTextStyles>) => {
  const letters = text.split('');

  return letters.map((letter, key) => {
    const className = classes[getClassName(letters, key)];

    return (
      <span className={className} key={`${letter}${key}`}>
        {letter}
      </span>
    );
  });
};

const getClassName = (letters: string[], key: number): CollapsibleTextStyles => {
  if (key === 0 || letters[key - 1] === ' ') {
    return 'visible';
  } else if (letters[key] === ' ') {
    return 'space';
  } else {
    return 'ghost';
  }
};

interface CollapsibleTextProps {
  children: string;
}

const CollapsibleText: React.SFC<
  CollapsibleTextProps & WithStyles<CollapsibleTextStyles> & WithMuiTypographyInjectedProps
> = ({ children, classes, className, component }) => {
  const Component = component;
  const componentClassName = `${className} ${classes.letter}`;

  return <Component className={componentClassName}>{splitText(children, classes)}</Component>;
};

export default withMuiTypography(withStyles(styles)(CollapsibleText));
