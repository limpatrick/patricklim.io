import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" component="footer">
      <Grid item>
        <Typography className={classes.text} variant="overline">
          © {new Date().getUTCFullYear()} Patrick Lim
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
