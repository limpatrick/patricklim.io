import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);
