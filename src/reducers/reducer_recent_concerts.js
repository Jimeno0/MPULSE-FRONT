import { RECENT_CONCERTS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case RECENT_CONCERTS:
      return action.payload;
    default:
      return state;
  }
}
