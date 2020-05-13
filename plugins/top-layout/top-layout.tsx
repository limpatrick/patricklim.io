import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

type Props = { children: React.ReactNode };

const TopLayout = ({ children }: Props) => (
  <>
    <CssBaseline />
    {children}
  </>
);

export default TopLayout;
