import { SnackbarProvider as NotistackProvider } from 'notistack';
import React from 'react';
import useStyles from './styles';

type Props = { children: React.ReactNode };

const SnackbarProvider = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <NotistackProvider
      classes={{
        variantSuccess: classes.success,
        variantError: classes.error,
        variantInfo: classes.info,
        variantWarning: classes.warning,
      }}
    >
      {children}
    </NotistackProvider>
  );
};

export default SnackbarProvider;
