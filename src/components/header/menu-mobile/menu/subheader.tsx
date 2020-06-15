import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import React from 'react';

type Props = { children: React.ComponentProps<typeof Typography>['children'] };

const Subheader = ({ children }: Props) => (
  <ListSubheader disableSticky>
    <Typography variant="overline">{children}</Typography>
  </ListSubheader>
);

export default Subheader;
