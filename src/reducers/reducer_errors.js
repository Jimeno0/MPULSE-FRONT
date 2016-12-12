import { SEARCH_CONCERTS_ERROR } from '../actions/index';

export default (state = null, action) => {
  switch (action.type) {
    case SEARCH_CONCERTS_ERROR:
        return action.payload.data;
    default:
      return state;
  }
};
