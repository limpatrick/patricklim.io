import { StoreState } from '.';
import { isEmpty } from 'lodash';

const getTags = (state: StoreState) =>
  !isEmpty(state.events.selectedId) ? state.tagsById[state.events.selectedId] : [];

const selectors = {
  getTags,
};

export default selectors;
