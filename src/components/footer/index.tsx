import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justify="center" component="footer" spacing={1}>
      <Grid item>
        <Typography variant="overline">© {new Date().getUTCFullYear()} Patrick Lim</Typography>
      </Grid>
      <Grid item>
        <IconButton href="https://github.com/limpatrick/patricklim.fr" target="_blank" size="small">
          <GitHubIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;
