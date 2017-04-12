import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './container/App';
import Home from './container/Home';
import NotFound from './container/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
