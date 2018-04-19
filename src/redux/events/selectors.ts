import { EventsState } from './reducers';
import { findIndex } from 'lodash';

const findEventIndex = (state: EventsState, id: string) => findIndex(state, (e) => e.id === id);

const eventsSelectors = {
  findEventIndex,
};

export default eventsSelectors;
