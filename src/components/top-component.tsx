import Box from '@material-ui/core/Box';
import React from 'react';
import { ID_TOP } from '~/constants';

type Props = { children: React.ReactElement };

const TopComponent = ({ children }: Props) => <Box id={ID_TOP}>{children}</Box>;

export default TopComponent;
