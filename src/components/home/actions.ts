import { Text, TEXT_ENTERED, TextEnteredAction } from './types';

export const textEntered = (text: Text): TextEnteredAction => ({
  type: TEXT_ENTERED,
  payload: text,
});
