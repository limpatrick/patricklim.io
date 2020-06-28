import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    white: {
      '&.MuiButton-root, &.MuiIconButton-root': {
        color: '#fff',
      },
    },
    primary: {
      '&.MuiButton-root, &.MuiIconButton-root': {
        color: theme.palette.text.primary,
      },
    },
  })
);
