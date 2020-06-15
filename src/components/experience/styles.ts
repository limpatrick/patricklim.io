import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    stepper: {
      '& .MuiStepContent-root': {
        marginLeft: 3,
        paddingLeft: 29,
      },
      '& .MuiStepConnector-root': {
        marginLeft: 3,
      },
    },
    title: {
      fontWeight: 500,
    },
    lineHeight: {
      [theme.breakpoints.down('xs')]: {
        lineHeight: 'initial',
      },
    },
  })
);
