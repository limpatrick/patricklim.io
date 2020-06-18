import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';
import { ID_TOP } from '~/constants';

type Props = BoxProps & { children: React.ReactElement };

const TopComponent = ({ children, ...props }: Props) => (
  <Box component="section" id={ID_TOP} {...props}>
    {children}
  </Box>
);

export default TopComponent;
