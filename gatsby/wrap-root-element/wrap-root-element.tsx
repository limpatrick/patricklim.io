import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { ConfigProvider } from '~/providers/config';
import { NetworkStatusProvider } from '~/providers/network-status';

type Props = { children: React.ReactNode };

const WrapRootElement = ({ children }: Props) => (
  <ConfigProvider>
    {([{ theme }]) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NetworkStatusProvider>{children}</NetworkStatusProvider>
      </ThemeProvider>
    )}
  </ConfigProvider>
);

export default WrapRootElement;
