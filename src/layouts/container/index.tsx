import MuiContainer from '@material-ui/core/Container';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  gutterBottom?: boolean;
  id?: string;
};

const Container = ({ children, className, gutterBottom, id }: Props) => {
  const classes = useStyles();

  return (
    <MuiContainer
      id={id}
      className={clsx(classes.root, className, { [classes.gutterBottom]: gutterBottom === true })}
      maxWidth="lg"
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
