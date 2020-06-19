import React, { createContext, useContext, useEffect, useState } from 'react';

type Props = { children: React.ReactNode };
type State = { online: boolean };

const NetworkStateContext = createContext<State | undefined>(undefined);

const NetworkProvider = ({ children }: Props) => {
  const [state, setState] = useState<State>(
    // force to true for ssr
    { online: typeof navigator !== 'undefined' ? navigator.onLine : true }
  );

  const handleNetworkChange = () => setState({ online: navigator.onLine });

  useEffect(() => {
    window.addEventListener('offline', handleNetworkChange);
    window.addEventListener('online', handleNetworkChange);

    return () => {
      window.removeEventListener('offline', handleNetworkChange);
      window.removeEventListener('online', handleNetworkChange);
    };
  }, []);

  return <NetworkStateContext.Provider value={state}>{children}</NetworkStateContext.Provider>;
};

const useNetworkState = () => {
  const context = useContext(NetworkStateContext);

  if (context === undefined)
    throw new Error('useNetworkState must be used within a NetworkProvider');

  return context;
};

export { NetworkProvider, useNetworkState };
