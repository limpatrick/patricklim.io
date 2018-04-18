import { Action } from '..';
import { Event } from 'src/api/typings';
import { FETCH_EVENTS_SUCCESS } from './types';

const eventsReducer = (state: EventsState = [], action: Action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return [...action.response];
    default:
      return state;
  }
};

export type EventsState = Event[];

export default eventsReducer;
