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
      marginTop: theme.spacing(2),
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
    hidden: {
      display: 'none',
    },
    send: {
      textAlign: 'center',
    },
  })
);
