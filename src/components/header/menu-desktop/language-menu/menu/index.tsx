import MuiMenu from '@material-ui/core/Menu';
import MuiMenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import useLanguages from '~/hooks/use-languages';
import useStyles from './styles';

type Props = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const Menu = ({ anchorEl, onClose }: Props) => {
  const classes = useStyles();
  const { languages, navigate, isCurrentLanguage } = useLanguages();

  return (
    <MuiMenu
      id="simple-menu"
      className={classes.root}
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {languages.map(([code, language]) => (
        <MuiMenuItem key={code} onClick={() => navigate(code)} selected={isCurrentLanguage(code)}>
          {language}
        </MuiMenuItem>
      ))}
    </MuiMenu>
  );
};

export default Menu;
