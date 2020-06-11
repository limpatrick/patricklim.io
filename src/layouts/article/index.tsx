import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import Container from '~/layouts/container';
import useStyles from './styles';

type Props = {
  children: React.ReactElement;
  className?: string;
  id?: string;
  title: string;
  variant?: boolean;
};

const Article = ({ children, className, id, title, variant }: Props) => {
  const classes = useStyles();

  return (
    <Box
      id={id}
      className={clsx(classes.root, { [classes.variant]: variant }, className)}
      component="article"
    >
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h4" component="h2">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Article;
