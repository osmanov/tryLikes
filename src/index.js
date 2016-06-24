import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route,browserHistory } from 'react-router';
import { ReduxRouter } from 'redux-router';

import App from './containers/App';
import Dislike from './containers/Dislike';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <ReduxRouter>
        <Route path="/" component={App}/>
        <Route path="/dislike" component={Dislike}/>
      </ReduxRouter>
    </Router>
  </Provider>,

  document.getElementById('container')
);