import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { ConfigProvider } from '~/providers/config';
import { NetworkProvider } from '~/providers/network';

type Props = { children: React.ReactNode };

const WrapRootElement = ({ children }: Props) => (
  <ConfigProvider>
    {([{ theme }]) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NetworkProvider>{children}</NetworkProvider>
      </ThemeProvider>
    )}
  </ConfigProvider>
);

export default WrapRootElement;
