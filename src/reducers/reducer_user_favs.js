import {
  FAV_CONCERTS_SUCCESS,
  ADD_CONCERT_TO_FAV_SUCCESS,
  REMOVE_FROM_FAV_SUCCESS
} from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FAV_CONCERTS_SUCCESS:
      return action.payload;
    case ADD_CONCERT_TO_FAV_SUCCESS:
      return [...state, action.payload];
    case REMOVE_FROM_FAV_SUCCESS:
    return state.filter(item => (item.concert_id !== action.payload.concert_id));
    default:
    return state;
  }
}
