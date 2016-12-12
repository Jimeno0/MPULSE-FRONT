import { LOGIN_USER_SUCCESS, LOGOUT_USER } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS :
    console.log('user data on login succesful: ', action.payload);
      const { token } = action.payload;
        window.localStorage.setItem('token', token);
      return action.payload;
    case LOGOUT_USER :
      return action.payload.data;
    default:
      return state;
  }
}
