import MuiContainer, { ContainerProps } from '@material-ui/core/Container';
import React from 'react';

type Props = ContainerProps & {
  children: React.ReactElement;
  component?: React.ElementType;
};

const Container = ({ children, ...props }: Props) => (
  <MuiContainer maxWidth="md" {...props}>
    {children}
  </MuiContainer>
);

export default Container;
