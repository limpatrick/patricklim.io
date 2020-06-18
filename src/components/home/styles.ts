import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const fontFamily = '"Varela", "Raleway", "Roboto", "Helvetica", "Arial", sans-serif';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > div': {
        '& > .MuiGrid-container': {
          minHeight: '100vh',
        },
      },
    },
    typist: {
      padding: theme.spacing(2),
      textAlign: 'center',
      '& > .Cursor': {
        color: '#fff',
      },
      [theme.breakpoints.up('sm')]: {
        '& > .MuiGrid-item': {
          display: 'inline-block',
        },
      },
    },
    title: {
      color: '#fff',
      fontFamily,
      fontWeight: 'bold',
      letterSpacing: '0.7rem',
      textTransform: 'uppercase',
    },
    subtitle: {
      color: '#fff',
      fontFamily,
      letterSpacing: '0.06rem',
    },
    next: {
      position: 'absolute',
      bottom: theme.spacing(2),
      '& > .MuiIconButton-root': {
        color: '#fff',
      },
    },
  })
);
