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
  component?: React.ComponentProps<typeof Box>['component'];
  id?: string;
  title: string;
};

const Article = ({ children, className, component, id, title }: Props) => {
  const classes = useStyles();

  return (
    <Box id={id} className={clsx(classes.root, className)} component={component ?? 'article'}>
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
