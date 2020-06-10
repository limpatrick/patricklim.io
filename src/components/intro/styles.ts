import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > section': {
        '& > .MuiGrid-container': {
          minHeight: '100vh',
          '& $title, & $subtitle': {
            fontFamily: '"Varela", "Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
          },
        },
      },
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      letterSpacing: '0.56rem',
      textAlign: 'center',
      textTransform: 'uppercase',
      '& > span': {
        display: 'inline-block',
      },
    },
    subtitle: {
      letterSpacing: '0.06rem',
      textAlign: 'center',
    },
    next: {
      position: 'absolute',
      bottom: theme.spacing(2),
    },
  })
);
