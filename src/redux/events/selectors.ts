import { findIndex, isEmpty } from 'lodash';

import { EventsState } from './reducers';

const findEventIndex = (state: EventsState) => findIndex(state.list, (e) => e.id === state.selectedId);

const getTags = (state: EventsState) => (!isEmpty(state.selectedId) ? state.aggregatedTagsById[state.selectedId] : []);

const eventsSelectors = {
  findEventIndex,
  getTags,
};

export default eventsSelectors;
