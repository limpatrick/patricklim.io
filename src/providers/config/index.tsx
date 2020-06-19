import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import { COOKIE_THEME_KEY } from '~/constants';
import { getItem, setItem } from '~/helpers/storage';
import { setPath as setPathAction, setTheme as setThemeAction } from './actions';
import reducer from './reducer';
import { ThemeKey, themeMap } from './themes';
import { State } from './types';

type Actions = {
  setPath: (path: string) => void;
  setTheme: (theme: ThemeKey) => void;
  toggleTheme: () => void;
};
type Props = { children: React.ReactNode | ((e: [State, Actions]) => React.ReactNode) };

const ConfigStateContext = createContext<State | undefined>(undefined);
const ConfigActionsContext = createContext<Actions | undefined>(undefined);
const initialState: State = { path: null, theme: themeMap.light, themeKey: 'light' };

const ConfigProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { themeKey } = state;

  const setPath: Actions['setPath'] = useCallback(path => {
    dispatch(setPathAction(path));
  }, []);

  const setTheme: Actions['setTheme'] = useCallback(key => {
    dispatch(setThemeAction(key));
  }, []);

  const toggleTheme: Actions['toggleTheme'] = useCallback(() => {
    const key = themeKey === 'light' ? 'dark' : 'light';

    setItem(COOKIE_THEME_KEY, key);
    setTheme(key);
  }, [setTheme, themeKey]);

  const actions: Actions = { setPath, setTheme, toggleTheme };

  useEffect(() => {
    const storedThemeKey = getItem(COOKIE_THEME_KEY);
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
    throw new Error('useConfigActions must be used within a ConfigProvider');

  return context;
};

const useConfig = (): [State, Actions] => [useConfigState(), useConfigActions()];

export { useConfig, ConfigProvider, useConfigActions, useConfigState };
