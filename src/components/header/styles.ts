import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    primary: {
      '&.MuiButton-root, &.MuiIconButton-root': {
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    secondary: {
      '&.MuiButton-root, &.MuiIconButton-root': {
        color: 'rgba(0, 0, 0, 0.54)',
      },
    },
    trigger: {
      '&.MuiButton-root, &.MuiIconButton-root': {
        color: theme.palette.text.secondary,
      },
    },
  })
);
