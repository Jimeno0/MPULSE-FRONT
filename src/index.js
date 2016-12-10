import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import reducers from './reducers';


require('../stylesheets/main.scss');
const devExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={createStoreWithMiddleware(reducers, devExtension)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#container'));
