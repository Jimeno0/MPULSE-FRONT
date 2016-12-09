import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SearchReducer from './reducer_search';
import UserReducer from './reducer_user';
import ArtistReducer from './reducer_artist';

const rootReducer = combineReducers({
  searchConcerts: SearchReducer,
  form: formReducer,
  user: UserReducer,
  artist: ArtistReducer,
});

export default rootReducer;
