import { RECENT_CONCERTS_SUCCESS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case RECENT_CONCERTS_SUCCESS:
      console.log('REDUCER FETCHING RECENT CONCERTS: ', action.payload);
      return action.payload;
    default:
      return state;
  }
}
