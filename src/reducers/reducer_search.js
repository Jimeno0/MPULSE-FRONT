import { SEARCH_CONCERTS } from '../actions/index';


export default function(state=[], action){
  switch (action.type) {
    case SEARCH_CONCERTS:
    if (!action.payload.data) {
      return []
    }
    return action.payload.data

  }
  return state
}