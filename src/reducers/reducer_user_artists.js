import {
  GET_USER_ARTISTS_SUCCESS,
  ADD_ARTIST_TO_FAV_SUCCESS,
  REMOVE_ARTIST_FROM_FAV_SUCCESS
} from '../actions/index';


export default function (state = [], action) {
  switch (action.type) {
    case GET_USER_ARTISTS_SUCCESS:
      return action.payload;
    case ADD_ARTIST_TO_FAV_SUCCESS:
      return [...state, action.payload];
    case REMOVE_ARTIST_FROM_FAV_SUCCESS:
    return state.filter(item => (item.name !== action.payload.name));
    default:
     return state;
  }
}
