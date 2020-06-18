import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const fontFamily = '"Varela", "Raleway", "Roboto", "Helvetica", "Arial", sans-serif';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > div': {
        '& > .MuiGrid-container': {
          minHeight: '100vh',
          '& > .Typist': {
            padding: theme.spacing(2),
            textAlign: 'center',
            [theme.breakpoints.up('sm')]: {
              '& > .MuiGrid-item': {
                display: 'inline-block',
              },
            },
            '& > .MuiGrid-item': {
              '& > .MuiTypography-root': {
                color: '#fff',
                fontFamily,
                textTransform: 'uppercase',
              },
              '&:first-child': {
                '& > .MuiTypography-root': {
                  fontWeight: 'bold',
                  letterSpacing: '0.7rem',
                },
              },
              '&:last-child': {
                '& > .MuiTypography-root': {
                  letterSpacing: '0.06rem',
                },
              },
            },
          },
        },
      },
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
