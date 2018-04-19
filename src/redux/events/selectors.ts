import { EventsState } from './reducers';
import { findIndex } from 'lodash';

const findEventIndex = (state: EventsState) => findIndex(state.list, (e) => e.id === state.selectedId);

const eventsSelectors = {
  findEventIndex,
};

export default eventsSelectors;
