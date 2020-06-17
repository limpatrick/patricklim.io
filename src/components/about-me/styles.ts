import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTypography-root > strong, & $button': {
        fontWeight: 700,
      },
    },
    button: {
      color: theme.palette.text.secondary,
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
