import MuiContainer, { ContainerProps } from '@material-ui/core/Container';
import React from 'react';

type Props = {
  children: React.ReactElement;
} & ContainerProps;

const Container = ({ children, ...props }: Props) => (
  <MuiContainer maxWidth="lg" {...props}>
    {children}
  </MuiContainer>
);

export default Container;
