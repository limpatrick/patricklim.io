export const TEXT_ENTERED = 'TEXT_ENTERED';

export type Text = keyof State;

export interface TextEnteredAction {
  type: typeof TEXT_ENTERED;
  payload: Text;
}

export type Action = TextEnteredAction;
export type State = { text1: boolean; text2: boolean; text3: boolean };
