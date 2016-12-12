import { SEARCH_CONCERTS_SUCCESS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_CONCERTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
