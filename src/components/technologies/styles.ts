import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiGrid-container': {
        '& .MuiGrid-item': {
          textAlign: 'center',
        },
      },
    },
    container: {
      '& > .MuiGrid-item': {
        padding: theme.spacing(3),
      },
    },
  })
);
