import { IconType } from '~/data/skills';

export const DISPLAY_DEFAULT = 'DISPLAY_DEFAULT';
export const DISPLAY_ACTIVE = 'DISPLAY_ACTIVE';

interface DisplayDefaultAction {
  type: typeof DISPLAY_DEFAULT;
  payload: IconType;
}

interface DisplayActiveAction {
  type: typeof DISPLAY_ACTIVE;
  payload: IconType;
}

export type Action = DisplayDefaultAction | DisplayActiveAction;
export type State = IconType;
