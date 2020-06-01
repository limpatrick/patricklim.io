import React, { createContext, useContext, useEffect, useState } from 'react';

type State = boolean;

const NetworkStatusContext = createContext<State | undefined>(undefined);

type Props = { children: React.ReactNode };

const NetworkStatusProvider = ({ children }: Props) => {
  const [online, setOnline] = useState<State>(
    typeof navigator !== 'undefined' ? navigator.onLine : true // force to true for ssr
  );

  const handleNetworkChange = () => {
    setOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('offline', handleNetworkChange);
    window.addEventListener('online', handleNetworkChange);

    return () => {
      window.removeEventListener('offline', handleNetworkChange);
      window.removeEventListener('online', handleNetworkChange);
    };
  }, []);

  return <NetworkStatusContext.Provider value={online}>{children}</NetworkStatusContext.Provider>;
};

const useNetworkStatus = () => {
  const context = useContext(NetworkStatusContext);

  if (context === undefined)
    throw new Error('useNetworkStatus must be used within a NetworkStatusProvider');

  return context;
};

export { useNetworkStatus, NetworkStatusProvider };
