import { FAV_CONCERTS_SUCCESS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FAV_CONCERTS_SUCCESS:
    return action.payload;
    default:
    return state;
  }
}
