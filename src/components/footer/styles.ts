import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const spacing = 2;

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(spacing),
      paddingBottom: theme.spacing(spacing),
    },
  })
);
