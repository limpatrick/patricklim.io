import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      minHeight: 'calc(100vh - 127px)',
    },
    buttonWrapper: {
      marginTop: theme.spacing(4),
    },
  })
);
