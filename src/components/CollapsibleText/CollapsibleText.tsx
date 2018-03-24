import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { CollapsibleTextStyles } from './styles';

import { ClassNameMap } from 'material-ui/styles/withStyles';
import { TypographyProps } from 'material-ui/Typography';

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
  className?: string;
  component?: React.ReactType;
  variant?: TypographyProps['variant'];
}

const CollapsibleText: React.SFC<CollapsibleTextProps & WithStyles<CollapsibleTextStyles>> = ({
  children,
  classes,
  className,
  component,
  variant,
}) => {
  const Component = component ? component : 'div';
  const variantClassName = variant ? classes[variant] : classes.body1;
  const componentClassName = className
    ? `${variantClassName} ${classes.letter} ${className}`
    : `${variantClassName} ${classes.letter}`;

  return <Component className={componentClassName}>{splitText(children, classes)}</Component>;
};

export default withStyles(styles)(CollapsibleText);
