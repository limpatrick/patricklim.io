import clsx from 'clsx';
import React from 'react';
import MuiContainer from '@material-ui/core/Container';
import useStyles from './styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: Props) => {
  const classes = useStyles();

  return (
    <MuiContainer id={id} className={clsx(classes.root, className)} maxWidth="lg">
      {children}
    </MuiContainer>
  );
};

export default Container;
