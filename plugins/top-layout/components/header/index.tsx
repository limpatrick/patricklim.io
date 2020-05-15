import React from 'react';
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

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      `#${id}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
        <div className={classes.scrollButton} onClick={handleClick} role="presentation">
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    </>
  );
};

export default Header;
