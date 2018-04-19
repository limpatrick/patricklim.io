import { findIndex, isEmpty } from 'lodash';

import { EventsState } from './reducers';

const getSelectedEvent = (state: EventsState) => state.list[getSelectedEventIndex(state)];

const getSelectedEventIndex = (state: EventsState) => findIndex(state.list, (e) => e.id === state.selectedId);

const getTags = (state: EventsState) => (!isEmpty(state.selectedId) ? state.aggregatedTagsById[state.selectedId] : []);

const eventsSelectors = {
  getSelectedEvent,
  getSelectedEventIndex,
  getTags,
};

export default eventsSelectors;
