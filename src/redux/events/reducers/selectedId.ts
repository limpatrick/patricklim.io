import { Action } from '../..';
import { SELECT_EVENT } from '../types';

const selectedIdReducer = (state: SelectedIdState = '', action: Action) => {
  switch (action.type) {
    case SELECT_EVENT:
      return action.id;
    default:
      return state;
  }
};

export type SelectedIdState = string;

export default selectedIdReducer;
