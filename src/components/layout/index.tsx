import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <Box className={classes.root} display="flex" alignItems="center" justifyContent="center">
        <Box>{children}</Box>
      </Box>
    </Container>
  );
};

export default Layout;
