import * as types from './types';

import { Dispatch } from 'react-redux';
import { Event } from 'src/api/typings';
import { StoreState } from '..';

export interface SelectEvent {
  events: Event[];
  id: string;
  type: types.SELECT_EVENT;
}

export type Action = SelectEvent;

export const selectEvent = (id: string) => (dispatch: Dispatch<Action>, getState: () => StoreState) => {
  dispatch({ events: getState().events, type: types.SELECT_EVENT, id } as SelectEvent);
};
