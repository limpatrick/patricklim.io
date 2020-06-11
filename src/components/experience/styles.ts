import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 500,
    },
    lineHeight: {
      [theme.breakpoints.down('xs')]: {
        lineHeight: 'initial',
      },
    },
  })
);
