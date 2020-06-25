import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.type === 'light' ? theme.palette.text.secondary : 'inherit',
    },
  })
);
