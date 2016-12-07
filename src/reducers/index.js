import { combineReducers } from 'redux';

import SearchReducer from './reducer_search';

const rootReducer = combineReducers({
  searchConcerts: SearchReducer
});

export default rootReducer;
