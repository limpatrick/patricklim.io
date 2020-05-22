import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiCardHeader-root': {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        '& .MuiCardHeader-title': {
          fontSize: '2.5rem',
          textAlign: 'center',
        },
      },
    },
    fullHeight: {
      [theme.breakpoints.up('sm')]: {
        height: '94px',
      },
    },
  })
);
