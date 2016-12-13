import {
  SEARCH_CONCERTS_ERROR,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  ADD_CONCERT_TO_FAV_ERROR,
  ADD_ARTIST_TO_FAV_ERROR,
  RECENT_CONCERTS_ERROR
} from '../actions/index';

export default (state = null, action) => {
  switch (action.type) {
    case SEARCH_CONCERTS_ERROR:
      return action.payload.data;
    case LOGIN_USER_ERROR:
      return action.payload.data;
    case REGISTER_USER_ERROR:
      return action.payload.data;
    case ADD_CONCERT_TO_FAV_ERROR:
      return action.payload.data;
    case ADD_ARTIST_TO_FAV_ERROR:
      return action.payload.data;
    case RECENT_CONCERTS_ERROR:
      return action.payload.data;
    default:
      return state;
  }
};
