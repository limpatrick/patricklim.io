import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%',
    },
    fullHeight: {
      [theme.breakpoints.up('sm')]: {
        height: '94px',
      },
    },
    error: {
      '& > .MuiLink-root': {
        color: 'inherit',
      },
    },
  })
);
