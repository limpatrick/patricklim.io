import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    default: {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    trigger: {
      color: theme.palette.text.secondary,
    },
  })
);
