import { IconType } from '~/data/skills';
import { Action, DISPLAY_ACTIVE, DISPLAY_DEFAULT } from './types';

export const displayDefault = (payload: IconType): Action => ({
  type: DISPLAY_DEFAULT,
  payload,
});

export const displayActive = (payload: IconType): Action => ({
  type: DISPLAY_ACTIVE,
  payload,
});
