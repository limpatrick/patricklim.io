import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Button from './button';
import Menu from './menu';
import { MenuMobileProvider } from './provider';
import useStyles from './styles';

const MenuMobile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MenuMobileProvider>
        <Grid item>
          <Button />
          <Menu />
        </Grid>
      </MenuMobileProvider>
    </Box>
  );
};

export default MenuMobile;
