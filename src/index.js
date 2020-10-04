import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store/store';
import BaseAppLayout from './layouts/base/BaseAppLayout';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BaseAppLayout history={history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
