export const CHANGE = 'CHANGE';
export const SUBMIT = 'SUBMIT';

export type Field = keyof State;

export interface ChangeAction {
  type: typeof CHANGE;
  meta: { field: Field };
  payload: string;
}

export interface SubmitAction {
  type: typeof SUBMIT;
}

export type Action = ChangeAction | SubmitAction;
export type State = { name: string; email: string; message: string };
