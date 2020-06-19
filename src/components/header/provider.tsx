import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import clsx, { ClassValue } from 'clsx';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useConfigState } from '~/providers/config';
import useStyles from './styles';

type State = { trigger: boolean };
type Actions = { classnames: (...clsxClasses: ClassValue[]) => string };
type Props = { children: (state: State, actions: Actions) => React.ReactElement };

const initialState: State = { trigger: false };
const HeaderStateContext = createContext<State | undefined>(undefined);
const HeaderActionsContext = createContext<Actions | undefined>(undefined);

const HeaderProvider = ({ children }: Props) => {
  const [state, setState] = useState(initialState);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { themeKey, path } = useConfigState();
  const classes = useStyles();

  useEffect(() => {
    setState({ trigger });
  }, [trigger]);

  const actions: Actions = useMemo(
    () => ({
      classnames: (...clsxClasses) =>
        clsx(
          { [classes.default]: !trigger },
          { [classes.defaultDark]: themeKey === 'dark' && path === '/404/' },
          { [classes.trigger]: trigger },
          ...clsxClasses
        ),
    }),
    [classes.default, classes.defaultDark, classes.trigger, path, themeKey, trigger]
  );

  return (
    <HeaderStateContext.Provider value={state}>
      <HeaderActionsContext.Provider value={actions}>
        {children(state, actions)}
      </HeaderActionsContext.Provider>
    </HeaderStateContext.Provider>
  );
};

const useHeaderState = () => {
  const context = useContext(HeaderStateContext);

  if (context === undefined) throw new Error('useHeaderState must be used within a HeaderProvider');

  return context;
};

const useHeaderActions = () => {
  const context = useContext(HeaderActionsContext);

  if (context === undefined)
    throw new Error('useHeaderActions must be used within a HeaderProvider');

  return context;
};

const useHeader = (): [State, Actions] => [useHeaderState(), useHeaderActions()];

export { HeaderProvider, useHeaderActions, useHeader, useHeaderState };
