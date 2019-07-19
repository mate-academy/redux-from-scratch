import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import store from './store';
import { Provider } from './react-redux';


ReactDOM.render(
  <Provider value={store}>
    <App x={1} />
  </Provider>,

  document.getElementById('root')
);
