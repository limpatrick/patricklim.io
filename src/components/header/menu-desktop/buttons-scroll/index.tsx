import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import useSections from '~/hooks/use-sections';
import { useConfigState } from '~/providers/config';
import useStyles from './styles';

const ButtonsScroll = () => {
  const { path } = useConfigState();
  const sections = useSections();
  const classes = useStyles();

  return path === '/' ? (
    <Grid item>
      {sections.map(({ id, scrollTo, title }) => (
        <Button key={id} className={classes.button} onClick={scrollTo}>
          {title}
        </Button>
      ))}
    </Grid>
  ) : null;
};

export default ButtonsScroll;
