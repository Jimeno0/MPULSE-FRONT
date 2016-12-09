import { LOGIN_USER, LOGOUT_USER } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER :
      const { token } = action.payload.data;
      if (token) {
        window.localStorage.setItem('token', token);
      }
      return action.payload.data;
    case LOGOUT_USER :
      return 'action.payload.data';
  }
  return state;
}
