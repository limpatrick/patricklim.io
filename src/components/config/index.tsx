import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getItem } from '~/utils/local-storage';
import { setTheme } from './actions';
import reducer, { initialState } from './reducer';
import { Dispatch, State } from './types';

const ConfigStateContext = createContext<State | undefined>(undefined);
const ConfigDispatchContext = createContext<Dispatch | undefined>(undefined);

type Props = { children: React.ReactNode | ((e: [State, Dispatch]) => React.ReactNode) };

const ConfigProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const themeKey = getItem('theme');

    if (themeKey !== state.themeKey && (themeKey === 'light' || themeKey === 'dark'))
      dispatch(setTheme(themeKey));
  }, []);

  return (
    <ConfigStateContext.Provider value={state}>
      <ConfigDispatchContext.Provider value={dispatch}>
        {typeof children === 'function' ? children([state, dispatch]) : children}
      </ConfigDispatchContext.Provider>
    </ConfigStateContext.Provider>
  );
};

const useConfigState = () => {
  const context = useContext(ConfigStateContext);

  if (context === undefined) throw new Error('useConfigState must be used within a ConfigProvider');

  return context;
};

const useConfigDispatch = () => {
  const context = useContext(ConfigDispatchContext);

  if (context === undefined)
    throw new Error('useConfigDispatch must be used within a ConfigProvider');

  return context;
};

const useConfig = (): [State, Dispatch] => [useConfigState(), useConfigDispatch()];

export { useConfig, ConfigProvider, useConfigDispatch, useConfigState };
export * from './actions';
