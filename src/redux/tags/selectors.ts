import { TagsState } from './reducers';
import { isEmpty } from 'lodash';

const getTags = (state: TagsState) => (!isEmpty(state.id) ? state.byId[state.id] : []);

const tagsSelectors = {
  getTags,
};

export default tagsSelectors;
