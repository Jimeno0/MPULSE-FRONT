import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import routes from './routes';
import reducers from './reducers';

require('../stylesheets/main.scss');

const logger = createLogger();

const devExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, devExtension)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#container'));
