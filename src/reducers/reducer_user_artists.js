import { GET_USER_ARTISTS } from '../actions/index';


export default function (state = [], action) {
  switch (action.type) {
    case GET_USER_ARTISTS:
    return action.payload.data;
  }
  return state;
}
