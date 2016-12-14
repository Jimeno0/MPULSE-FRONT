import { LOGIN_USER_SUCCESS, LOGOUT_USER } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS :
      window.localStorage.setItem('token', action.payload.token);
      return action.payload;
    case LOGOUT_USER :
      window.localStorage.removeItem('token');
      return {};
    default:
      return state;
  }
}
