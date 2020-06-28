import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import React from 'react';
import { useMenuMobile } from '../provider';
import Header from './header';
import ItemTheme from './item-theme';
import ItemsLanguage from './items-language';
import ItemsScroll from './items-scroll';
import useStyles from './styles';

const Transition = React.forwardRef(
  (props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) => (
    <Slide direction="up" ref={ref} {...props} />
  )
);

const Menu = () => {
  const [{ isOpen }, { close, onExited }] = useMenuMobile();
  const classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      fullScreen
      onClose={() => close()}
      onExited={onExited}
      open={isOpen}
      TransitionComponent={Transition}
    >
      <Header />
      <List>
        <ItemsScroll />
        <ItemsLanguage />
        <ItemTheme />
      </List>
    </Dialog>
  );
};

export default Menu;
