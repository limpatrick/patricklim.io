import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 500,
    },
    dates: {
      [theme.breakpoints.down('sm')]: {
        flexGrow: 0,
        maxWidth: '100%',
        flexBasis: '100%',
      },
    },
    titleContainer: {
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(1),
      },
    },
    lineHeight: {
      [theme.breakpoints.down('sm')]: {
        lineHeight: 'initial',
      },
    },
  })
);
