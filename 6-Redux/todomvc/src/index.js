import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import createStore from './redux/createStore';
import 'todomvc-app-css/index.css';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
