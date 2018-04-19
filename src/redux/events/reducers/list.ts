import { Action } from '../..';
import { Event } from 'src/api/typings';
import { FETCH_EVENTS_SUCCESS } from '../types';

const listReducer = (state: ListState = [], action: Action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return [...action.response];
    default:
      return state;
  }
};

export type ListState = Event[];

export default listReducer;
