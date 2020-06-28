import {
  ON_CALLBACK_CALLED,
  ON_EXITED,
  OnCallbackCalledAction,
  OnExitedAction,
  SET_IS_OPEN,
  SetIsOpenAction,
} from './types';

export const onCallbackCalled = (): OnCallbackCalledAction => ({ type: ON_CALLBACK_CALLED });

export const onExited = (): OnExitedAction => ({ type: ON_EXITED });

export const setIsOpen = (isOpen: boolean, callback?: () => void): SetIsOpenAction => ({
  type: SET_IS_OPEN,
  payload: isOpen,
  meta: { callback },
});
