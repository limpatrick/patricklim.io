import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    success: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
    },
    error: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
    info: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
    },
    warning: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
    },
  })
);
