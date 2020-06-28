import { duration } from '@material-ui/core';
import React, { createContext, useCallback, useContext, useState } from 'react';

type Actions = { open: () => void; close: () => void; closePromise: () => Promise<void> };
type Props = { children: React.ReactNode };
type State = { isOpen: boolean };

const MenuMobileStateContext = createContext<State | undefined>(undefined);
const MenuMobileActionsContext = createContext<Actions | undefined>(undefined);

const MenuMobileProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<State>({ isOpen: false });

  const open = useCallback(() => setIsOpen({ isOpen: true }), []);
  const close = useCallback(() => setIsOpen({ isOpen: false }), []);
  const closePromise = useCallback(
    () =>
      new Promise<void>(resolve => {
        close();
        setTimeout(() => {
          alert('close promise resolve');

          resolve();
        }, duration.leavingScreen + 1);
      }),
    [close]
  );

  const actions: Actions = { open, close, closePromise };

  return (
    <MenuMobileStateContext.Provider value={isOpen}>
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
