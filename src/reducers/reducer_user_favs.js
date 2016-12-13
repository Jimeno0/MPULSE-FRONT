import { GET_USER_FAVS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case GET_USER_FAVS:
    return action.payload.data;
  }
  return state;
}
