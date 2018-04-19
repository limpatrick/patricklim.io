import { Action } from '..';
import { Event } from 'src/api/typings';
import { FETCH_EVENTS_SUCCESS } from './types';
import { findIndex } from 'lodash';

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

export const findEventIndex = (state: EventsState, id: string) => findIndex(state, (e) => e.id === id);
