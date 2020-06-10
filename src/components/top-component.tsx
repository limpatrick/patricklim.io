import Box from '@material-ui/core/Box';
import React from 'react';
import { ID_TOP } from '~/constants';

type Props = { children: React.ReactElement; className?: string };

const TopComponent = ({ children, className }: Props) => (
  <Box id={ID_TOP} className={className}>
    {children}
  </Box>
);

export default TopComponent;
