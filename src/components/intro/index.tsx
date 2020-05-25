import { useIntl } from 'gatsby-plugin-intl';
import React, { useReducer } from 'react';
import useScrollTo from '~/hooks/use-scroll-to';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { duration } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { textEntered } from './actions';
import reducer, { initialState } from './reducer';
import useStyles from './styles';

type Props = { id: string };

const Intro = ({ id }: Props) => {
  const [{ text1, text2 }, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles();
  const { scrollTo } = useScrollTo(id);
  const { formatMessage } = useIntl();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center">
      <Grid item>
        <Typography className={classes.title} variant="h1" gutterBottom>
          <Slide
            direction="down"
            in
            timeout={{ enter: duration.complex }}
            onEntered={() => dispatch(textEntered('text1'))}>
            <span>patrick</span>
          </Slide>{' '}
          <Slide
            direction="up"
            in
            timeout={{ enter: duration.complex }}
            onEntered={() => dispatch(textEntered('text2'))}>
            <span>lim</span>
          </Slide>
        </Typography>
      </Grid>
      <Grid item>
        <Grow
          in={text1 && text2}
          timeout={{ enter: duration.complex }}
          onEntered={() => dispatch(textEntered('text3'))}>
          <Typography className={classes.subtitle} variant="overline" component="p" gutterBottom>
            full stack javascript developer
          </Typography>
        </Grow>
      </Grid>
      <Box className={classes.next}>
        <IconButton aria-label={formatMessage({ id: 'global.next-aria-label' })} onClick={scrollTo}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Intro;
