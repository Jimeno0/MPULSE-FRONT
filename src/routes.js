import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greeting = () => (<div>Hi impulse</div>);


export default(
  <Route path="/" component={App}>
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
    <Route path="greet4" component={Greeting} />
  </Route>
  );
