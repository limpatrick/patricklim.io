import { SnackbarKey, useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNetworkStatus } from '~/providers/network-status';
import Alert from './alert';

const NetworkAlert = () => {
  const [key, setKey] = useState<SnackbarKey | undefined>(undefined);
  const online = useNetworkStatus();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (key === undefined) {
      if (!online) setKey(enqueueSnackbar(<Alert />, { persist: true }));
    } else if (online) {
      closeSnackbar(key);
      setKey(undefined);
    }
  }, [closeSnackbar, enqueueSnackbar, key, online]);

  return null;
};

export default NetworkAlert;
