import { concat, findIndex, isEmpty, reduce } from 'lodash';

import { Action } from '..';
import { Event } from 'src/api/typings';
import { SELECT_EVENT } from './types';
import { Tag } from 'src/api/typings';
import { combineReducers } from 'redux';

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

const IdReducer = (state: IdState = '', action: Action) => {
  switch (action.type) {
    case SELECT_EVENT:
      return action.id;
    default:
      return state;
  }
};

const tagsReducer = combineReducers<TagsState>({ byId: tagsByIdReducer, id: IdReducer });

export type IdState = string;
export type TagsByIdState = Record<string, Tag[]>;
export interface TagsState {
  byId: TagsByIdState;
  id: IdState;
}

export default tagsReducer;

export const getTags = (state: TagsState) => (!isEmpty(state.id) ? state.byId[state.id] : []);
