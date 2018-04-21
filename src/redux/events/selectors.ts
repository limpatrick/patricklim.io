import { findIndex, isEmpty } from 'lodash';

import { EventsState } from './reducers';

const getSelectedEvent = (state: EventsState) => state.list[getSelectedEventIndex(state)];

const getSelectedEventIndex = (state: EventsState) => findIndex(state.list, (e) => e.id === state.selectedId);

const getSkills = (state: EventsState) => {
  const selectedEvent = getSelectedEvent(state);

  return !isEmpty(selectedEvent) ? selectedEvent.skills : [];
};

const eventsSelectors = {
  getSelectedEvent,
  getSelectedEventIndex,
  getSkills,
};

export default eventsSelectors;
