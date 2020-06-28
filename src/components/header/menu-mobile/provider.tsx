import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { onCallbackCalled, onExited, setIsOpen } from './actions';
import reducer from './reducer';
import { State } from './types';

type Actions = { open: () => void; close: (callback?: () => void) => void; onExited: () => void };
type Props = { children: React.ReactNode };

const MenuMobileStateContext = createContext<State | undefined>(undefined);
const MenuMobileActionsContext = createContext<Actions | undefined>(undefined);
const initialState: State = { exited: false, isOpen: false, callback: undefined };

const MenuMobileProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: Actions = useMemo(
    () => ({
      open: () => dispatch(setIsOpen(true)),
      close: callback => dispatch(setIsOpen(false, callback)),
      onExited: () => dispatch(onExited()),
    }),
    []
  );

  useEffect(() => {
    if (state.isOpen === false && state.callback) {
      alert('callback() scroll body');
      state.callback();
      dispatch(onCallbackCalled());
    }
  }, [state]);

  return (
    <MenuMobileStateContext.Provider value={state}>
      <MenuMobileActionsContext.Provider value={actions}>
        {children}
      </MenuMobileActionsContext.Provider>
    </MenuMobileStateContext.Provider>
  );
};

const useMenuMobileState = () => {
  const context = useContext(MenuMobileStateContext);

  if (context === undefined)
    throw new Error('useMenuMobileState must be used within a MenuMobileProvider');

  return context;
};

const useMenuMobileActions = () => {
  const context = useContext(MenuMobileActionsContext);

  if (context === undefined)
    throw new Error('useMenuMobileActions must be used within a MenuMobileProvider');

  return context;
};

const useMenuMobile = (): [State, Actions] => [useMenuMobileState(), useMenuMobileActions()];

export { MenuMobileProvider, useMenuMobileState, useMenuMobile, useMenuMobileActions };
