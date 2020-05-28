import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const spacing = 2;

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(spacing),
      marginBottom: theme.spacing(spacing),
    },
  })
);
