import React from 'react';
import useScrollTo from '~/hooks/use-scroll-to';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';

type Props = { id: string };

const Home = ({ id }: Props) => {
  const classes = useStyles();
  const { scrollTo } = useScrollTo(id);

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center">
      <Grid item>
        <Typography className={classes.title} variant="h1" gutterBottom>
          patrick lim
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.subtitle} variant="subtitle1" component="p" gutterBottom>
          full stack developer
        </Typography>
      </Grid>
      <Box className={classes.next}>
        <IconButton aria-label="next" onClick={scrollTo}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Home;
