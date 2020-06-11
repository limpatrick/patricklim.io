import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(16),
    },
    text: {
      marginTop: theme.spacing(4),
    },
  })
);
