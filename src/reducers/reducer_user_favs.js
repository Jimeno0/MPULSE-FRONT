import { FAV_CONCERTS_SUCCESS, ADD_CONCERT_TO_FAV_SUCCESS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FAV_CONCERTS_SUCCESS:
      return action.payload;
    case ADD_CONCERT_TO_FAV_SUCCESS:
      return [...state, action.payload];
    default:
    return state;
  }
}
