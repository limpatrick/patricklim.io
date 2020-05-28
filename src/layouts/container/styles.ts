import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const spacing = 12;

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:not(:last-child)': {
        marginTop: theme.spacing(spacing),
        marginBottom: theme.spacing(spacing),
      },
    },
    gutterBottom: {
      marginBottom: theme.spacing(spacing / 2),
    },
  })
);
