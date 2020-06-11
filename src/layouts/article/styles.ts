import { createStyles, makeStyles, Theme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(16),
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '0.5rem',
      marginBottom: theme.spacing(6),
    },
    variant: {
      backgroundColor: grey['900'],
      color: '#fff',
    },
  })
);
