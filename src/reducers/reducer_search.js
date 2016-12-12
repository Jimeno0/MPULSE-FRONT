import { SEARCH_CONCERTS_SUCCESS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_CONCERTS_SUCCESS:
    console.log(SEARCH_CONCERTS_SUCCESS, action);
      return action.payload;
    default:
      return state;
  }
}
