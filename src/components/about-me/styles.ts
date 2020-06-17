import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTypography-root > strong, & $button': {
        fontWeight: 600,
      },
    },
    button: {
      color: theme.palette.primary.main,
      fontSize: '1rem',
      lineHeight: 1.5,
      padding: 0,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'initial',
      },
    },
  })
);
