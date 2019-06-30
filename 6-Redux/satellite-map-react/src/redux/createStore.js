import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
