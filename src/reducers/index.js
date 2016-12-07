import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SearchReducer from './reducer_search';

const rootReducer = combineReducers({
  searchConcerts: SearchReducer,
  form: formReducer
});

export default rootReducer;
