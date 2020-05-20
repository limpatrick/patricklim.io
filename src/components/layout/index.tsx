import clsx from 'clsx';
import { mergeRight } from 'ramda';
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

type ContainerOptions = {
  alignItems: React.ComponentProps<typeof Grid>['alignItems'];
  justify: React.ComponentProps<typeof Grid>['justify'];
};

type Props = {
  children: React.ReactNode;
  id?: string;
  containerOptions?: Partial<ContainerOptions>;
  fullScreen?: boolean;
};

const defaultContainerOptions: ContainerOptions = {
  alignItems: 'center',
  justify: 'center',
};

const Layout = ({ children, id, containerOptions = {}, fullScreen = false }: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid
        id={id}
        className={clsx({ [classes.containerFullScreen]: fullScreen })}
        container
        {...mergeRight(defaultContainerOptions, containerOptions)}>
        {children}
      </Grid>
    </Container>
  );
};

export default Layout;
