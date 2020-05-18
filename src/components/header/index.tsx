import React from 'react';
import useScrollTo from '~/hooks/use-scroll-to';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './styles';

const id = 'back-to-top-anchor';

const Header = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { scrollTo } = useScrollTo(id);

  return (
    <>
      <AppBar id={id} className={classes.header} position="static" elevation={0}>
        <Toolbar>
          <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid item>EN / FR</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Zoom in={trigger}>
        <div className={classes.scrollButton} onClick={scrollTo} role="presentation">
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    </>
  );
};

export default Header;
