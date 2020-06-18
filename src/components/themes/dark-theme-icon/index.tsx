import MoonIcon from '@material-ui/icons/Brightness2Sharp';
import React from 'react';
import useStyles from './styles';

const DarkThemeIcon = () => {
  const classes = useStyles();

  return <MoonIcon className={classes.root} />;
};

export default DarkThemeIcon;
