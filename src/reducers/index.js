import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SearchReducer from './reducer_search';
import UserReducer from './reducer_user';
import ArtistReducer from './reducer_artist';
import UserArtistsReducer from './reducer_user_artists';
import RecentConcertsReducer from './reducer_recent_concerts';
import FavsReducer from './reducer_user_favs';

import ErrorsReducer from './reducer_errors';

const rootReducer = combineReducers({
  searchConcerts: SearchReducer,
  form: formReducer,
  user: UserReducer,
  searchedArtist: ArtistReducer,
  userArtists: UserArtistsReducer,
  recentConcerts: RecentConcertsReducer,
  Errors: ErrorsReducer,
  userFavs: FavsReducer

});

export default rootReducer;
