import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    default: {
      color: 'rgba(0, 0, 0, 0.54)',
      '&$defaultDark': {
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    defaultDark: {},
    trigger: {
      color: theme.palette.text.secondary,
    },
  })
);
