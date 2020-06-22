import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(20),
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '0.5rem',
      marginBottom: theme.spacing(6),
    },
  })
);
