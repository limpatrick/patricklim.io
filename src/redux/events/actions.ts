import * as api from 'src/api';
import * as types from './types';

import { Dispatch } from 'react-redux';
import { Event } from 'src/api/typings';

export interface FetchEventsRequest {
  type: types.FETCH_EVENTS_REQUEST;
}

export interface FetchEventsSuccess {
  type: types.FETCH_EVENTS_SUCCESS;
  response: Event[];
}

export interface FetchEventsFailure {
  type: types.FETCH_EVENTS_FAILURE;
  message: string;
}

export interface SelectEvent {
  id: string;
  type: types.SELECT_EVENT;
}

export type Action = FetchEventsRequest | FetchEventsSuccess | FetchEventsFailure | SelectEvent;

export const fetchEvents = () => (dispatch: Dispatch<Action>) => {
  dispatch({ type: types.FETCH_EVENTS_REQUEST } as FetchEventsRequest);

  return api.fetchEvents().then(
    (response) => {
      dispatch({
        type: types.FETCH_EVENTS_SUCCESS,
        response,
      } as FetchEventsSuccess);
    },
    (error) => {
      dispatch({
        type: types.FETCH_EVENTS_FAILURE,
        message: error.message || 'Something went wrong.',
      } as FetchEventsFailure);
    }
  );
};

export const selectEvent = (id: string) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: types.SELECT_EVENT, id } as SelectEvent);
};
