import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    primary: {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    secondary: {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    trigger: {
      color: theme.palette.text.secondary,
    },
  })
);
