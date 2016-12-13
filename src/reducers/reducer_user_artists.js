import { GET_USER_ARTISTS_SUCCESS } from '../actions/index';


export default function (state = [], action) {
  switch (action.type) {
    case GET_USER_ARTISTS_SUCCESS:
      return action.payload;
    default:
     return state;
  }
}
