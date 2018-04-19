import { Event, Tag } from 'src/api/typings';
import { concat, findIndex, reduce } from 'lodash';

import { Action } from '../..';
import { SELECT_EVENT } from 'src/redux/events/types';

const aggregatedTagsByIdReducer = (state: AggregatedTagsByIdState = {}, action: Action) => {
  switch (action.type) {
    case SELECT_EVENT:
      const { events, id } = action;
      const index = findIndex(events, (e) => e.id === id);

      return {
        ...state,
        [id]: reduce<Event, Tag[]>(events.slice(0, index + 1), (acc, { tags }, key) => concat(acc, tags), []),
      };
    default:
      return state;
  }
};

export type AggregatedTagsByIdState = Record<string, Tag[]>;

export default aggregatedTagsByIdReducer;
