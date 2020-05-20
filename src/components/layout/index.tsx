import React from 'react';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

type Props = {
  children: React.ReactNode;
  id?: string;
};

const Layout = ({ children, id }: Props) => {
  const classes = useStyles();

  return (
    <Container id={id} className={classes.root} maxWidth="lg">
      {children}
    </Container>
  );
};

export default Layout;
