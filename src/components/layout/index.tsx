import clsx from 'clsx';
import React from 'react';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Layout = ({ children, className, id }: Props) => {
  const classes = useStyles();

  return (
    <Container id={id} className={clsx(classes.root, className)} maxWidth="lg">
      {children}
    </Container>
  );
};

export default Layout;
