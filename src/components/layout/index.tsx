import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

type Props = { children: React.ReactNode; id?: string };

const Layout = ({ children, id }: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid id={id} container justify="center" alignItems="center">
        {children}
      </Grid>
    </Container>
  );
};

export default Layout;
