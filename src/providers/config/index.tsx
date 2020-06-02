import { Theme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getItem, setItem, THEME_KEY } from '~/helpers/storage';
import { ThemeKey, themeMap } from './themes';

type State = { theme: Theme; themeKey: ThemeKey };
type Actions = {
  setTheme: (theme: ThemeKey) => void;
  toggleTheme: () => void;
};
type Props = { children: React.ReactNode | ((e: [State, Actions]) => React.ReactNode) };

const ConfigStateContext = createContext<State | undefined>(undefined);
const ConfigActionsContext = createContext<Actions | undefined>(undefined);

const initialState: State = { theme: themeMap.light, themeKey: 'light' };

const ConfigProvider = ({ children }: Props) => {
  const [state, setState] = useState(initialState);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { themeKey } = state;

  const setTheme: Actions['setTheme'] = useCallback(key => {
    setState({ theme: themeMap[key], themeKey: key });
  }, []);

  const toggleTheme: Actions['toggleTheme'] = useCallback(() => {
    const key = themeKey === 'light' ? 'dark' : 'light';

    setItem(THEME_KEY, key);
    setTheme(key);
  }, [setTheme, themeKey]);

  const actions = { setTheme, toggleTheme };

  useEffect(() => {
    const storedThemeKey = getItem(THEME_KEY);
    let key: ThemeKey;

    if (storedThemeKey !== null && (storedThemeKey === 'light' || storedThemeKey === 'dark'))
      key = storedThemeKey;
    else key = prefersDarkMode ? 'dark' : 'light';

    if (key !== themeKey) setTheme(key);
  }, [prefersDarkMode, setTheme, themeKey]);

  return (
    <ConfigStateContext.Provider value={state}>
      <ConfigActionsContext.Provider value={actions}>
        {typeof children === 'function' ? children([state, actions]) : children}
      </ConfigActionsContext.Provider>
    </ConfigStateContext.Provider>
  );
};

const useConfigState = () => {
  const context = useContext(ConfigStateContext);

  if (context === undefined) throw new Error('useConfigState must be used within a ConfigProvider');

  return context;
};

const useConfigActions = () => {
  const context = useContext(ConfigActionsContext);

  if (context === undefined)
    throw new Error('useConfigDispatch must be used within a ConfigProvider');

  return context;
};

const useConfig = (): [State, Actions] => [useConfigState(), useConfigActions()];

export { useConfig, ConfigProvider, useConfigActions, useConfigState };
