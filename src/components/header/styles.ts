import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: 'transparent',
      color: 'inherit',
    },
    links: {
      '&, & > .MuiLink-root': {
        color: 'inherit',
      },
      '& > $activeLink': {
        textDecoration: 'underline',
      },
    },
    activeLink: {},
    scrollButton: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);
