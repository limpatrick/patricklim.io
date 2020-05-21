import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& $intro, & $mail': {
        paddingLeft: theme.spacing(1),
      },
    },
    intro: {
      marginBottom: theme.spacing(4),
    },
    mail: {},
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
    send: {
      textAlign: 'center',
    },
  })
);
