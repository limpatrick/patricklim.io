import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      margin: `${theme.spacing(1)}px 0`,
    },
    iconWrapper: {
      minHeight: '3.5rem',
    },
  })
);
