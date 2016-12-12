import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import createLogger from 'redux-logger';

const logger = createLogger();

import routes from './routes';
import reducers from './reducers';


require('../stylesheets/main.scss');

const devExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk, logger)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={createStoreWithMiddleware(reducers, devExtension)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#container'));
