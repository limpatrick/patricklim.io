import transitions from '@material-ui/core/styles/transitions';
import { TransitionHandlerProps } from '@material-ui/core/transitions';
import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { onExited, setIsOpen } from './actions';
import reducer from './reducer';
import { State } from './types';

type Actions = {
  open: () => void;
  close: (callback?: () => void) => void;
  onExited: TransitionHandlerProps['onExited'];
};
type Props = { children: React.ReactNode };

const MenuMobileStateContext = createContext<State | undefined>(undefined);
const MenuMobileActionsContext = createContext<Actions | undefined>(undefined);
const initialState: State = { exited: false, isOpen: false, callback: undefined };

const MenuMobileProvider = ({ children }: Props) => {
  const [{ callback, exited, isOpen }, dispatch] = useReducer(reducer, initialState);

  const actions: Actions = useMemo(
    () => ({
      open: () => dispatch(setIsOpen(true)),
      close: cb => dispatch(setIsOpen(false, cb)),
      onExited: () => {
        if (callback) {
          callback();
          dispatch(onExited());
          // const nodeExists0 = document.body.contains(node);
          // alert(`MenuMobileProvider -> nodeExists0=${nodeExists0}`);
          // const id = setInterval(() => {
          //   const nodeExists = document.body.contains(node);
          //   alert(`id -> nodeExists=${nodeExists}`);

          //   if (nodeExists === false) {
          //     alert(`clearInterval=${id}`);

          //     if (callback) callback();

          //     clearInterval(id);
          //     dispatch(onExited());
          //   }
          // });
        }
      },
    }),
    [callback]
  );

  return (
    <MenuMobileStateContext.Provider value={{ callback, exited, isOpen }}>
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
