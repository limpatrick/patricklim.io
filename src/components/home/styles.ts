import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > div': {
        '& > .MuiGrid-container': {
          minHeight: '100vh',
          '& $title, & $subtitle': {
            fontFamily: '"Varela", "Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
          },
        },
      },
    },
    title: {
      color: '#fff',
      fontWeight: 'bold',
      letterSpacing: '0.7rem',
      textAlign: 'center',
      textTransform: 'uppercase',
      '& > span': {
        display: 'inline-block',
      },
    },
    subtitle: {
      color: '#fff',
      letterSpacing: '0.06rem',
      textAlign: 'center',
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
