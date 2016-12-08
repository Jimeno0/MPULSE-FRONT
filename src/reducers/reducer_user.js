import { LOGIN_USER } from '../actions/index';

export default function(state = {},action){
  switch (action.type) {
    case LOGIN_USER :
      console.log('reducer de current user', action.payload.data);
      return action.payload.data
  }
  return state;
}