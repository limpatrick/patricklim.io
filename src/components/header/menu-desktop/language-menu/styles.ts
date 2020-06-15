import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    button: {
      fontSize: '0.75rem',
      '& .MuiButton-endIcon': {
        marginLeft: theme.spacing(0.5),
      },
    },
  })
);
