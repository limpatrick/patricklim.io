import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import Container from '~/layouts/container';
import useStyles from './styles';

type Props = { children: React.ReactElement; id?: string; title: string; variant?: boolean };

const Article = ({ children, id, title, variant }: Props) => {
  const classes = useStyles();

  return (
    <Container
      id={id}
      className={clsx(classes.root, { [classes.variant]: variant })}
      component="article"
    >
      <Grid container>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h4" component="h2" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Article;
