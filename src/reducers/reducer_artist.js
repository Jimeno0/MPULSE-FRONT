import { SET_SEARCHED_ARTIST } from '../actions/index';


export default function (state = null, action) {
  switch (action.type) {
    case SET_SEARCHED_ARTIST:
    console.log('reducer', action.payload);
    return action.payload;
  }
  return state;
}
