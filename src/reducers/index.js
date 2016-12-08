import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SearchReducer from './reducer_search';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  searchConcerts: SearchReducer,
  form: formReducer,
  user: UserReducer
});

export default rootReducer;
