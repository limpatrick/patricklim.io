import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6),
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '0.3rem',
    },
    variant: {
      background: '#000',
      color: 'white',
    },
  })
);
