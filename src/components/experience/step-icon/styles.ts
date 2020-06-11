import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(1),
      height: theme.spacing(1),
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
    },
  })
);
