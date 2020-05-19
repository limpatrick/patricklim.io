import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > .MuiGrid-root': { minHeight: '100vh' },
    },
    form: {
      width: '100%',
    },
    fullHeight: {
      [theme.breakpoints.up('sm')]: {
        height: '94px',
      },
    },
    close: {
      padding: theme.spacing(0.5),
    },
    error: {
      '& > .MuiLink-root': {
        color: 'inherit',
      },
    },
  })
);
