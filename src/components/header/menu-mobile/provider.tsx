import React, { createContext, useCallback, useContext, useState } from 'react';

type State = boolean;
type Props = { children: React.ReactNode };
type Actions = { open: () => void; close: () => void; closePromise: () => Promise<undefined> };

const MenuMobileStateContext = createContext<State>(false);
const MenuMobileActionsContext = createContext<Actions | undefined>(undefined);

const MenuMobileProvider = ({ children }: Props) => {
  const [isOpen, setOpen] = useState<State>(false);

  const open = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);
  const closePromise = useCallback(
    () =>
      new Promise<undefined>(resolve => {
        close();
        setTimeout(() => {
          resolve();
        });
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

  return context;
};

const useMenuMobileActions = () => {
  const context = useContext(MenuMobileActionsContext);

  if (context === undefined)
    throw new Error('useMenuMobileActions must be used within a MenuMobileProvider');

  return context;
};

const useMenuMobile = (): [State, Actions] => [useMenuMobileState(), useMenuMobileActions()];

export { useMenuMobile, useMenuMobileActions, useMenuMobileState, MenuMobileProvider };
