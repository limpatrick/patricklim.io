import Box from '@material-ui/core/Box';
import React from 'react';
import ButtonsScroll from './buttons-scroll';
import LanguageMenu from './language-menu';
import useStyles from './styles';
import ToggleTheme from './toggle-theme';

const MenuDesktop = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ButtonsScroll />
      <LanguageMenu />
      <ToggleTheme />
    </Box>
  );
};

export default MenuDesktop;
