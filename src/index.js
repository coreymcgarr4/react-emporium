import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  browserHistory
} from 'react-router';

import store from './store';
import {Provider} from 'react-redux';
import App from './components/App/App.js';
import Login from './components/Login/Login.js';

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='/shop' component={Login}>
          </Route>
        </Route>
      </Router>
    </Provider>
  , document.getElementById('react-node'));
