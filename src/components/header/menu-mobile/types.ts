export const ON_EXITED = 'ON_EXITED';
export const SET_IS_OPEN = 'SET_IS_OPEN';

export type OnExitedAction = {
  type: typeof ON_EXITED;
};

export type SetIsOpenAction = {
  type: typeof SET_IS_OPEN;
  payload: boolean;
  meta: { callback?: () => void };
};

export type Action = OnExitedAction | SetIsOpenAction;
export type State = { exited: boolean; isOpen: boolean; callback: (() => void) | null | undefined };
