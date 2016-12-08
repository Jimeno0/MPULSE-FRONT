import { LOGIN_USER, LOGOUT_USER } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER :
      console.log('Reducer: ', action.payload);
      const { token } = action.payload.data;
      if (token) {
        window.localStorage.setItem('token', token);
      }
      console.log('reducer de current user', action.payload.data);
      return action.payload.data;
    case LOGOUT_USER :
      console.log('reducer de current user', action);
      return 'action.payload.data';
  }
  return state;
}
