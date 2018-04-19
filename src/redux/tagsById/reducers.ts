import { concat, findIndex, reduce } from 'lodash';

import { Action } from '..';
import { Event } from 'src/api/typings';
import { SELECT_EVENT } from 'src/redux/events/types';
import { Tag } from 'src/api/typings';

const tagsByIdReducer = (state: TagsByIdState = {}, action: Action) => {
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

export type TagsByIdState = Record<string, Tag[]>;

export default tagsByIdReducer;
