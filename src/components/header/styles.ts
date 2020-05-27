import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      '& > .MuiGrid-root:not(:last-child)': {
        marginRight: theme.spacing(1),
      },
    },
    links: {
      '& > .MuiButton-root': {
        minWidth: 0,
      },
    },
    scrollButton: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);
