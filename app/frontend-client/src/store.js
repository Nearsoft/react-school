import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers/index';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger)
    ),
);

export default store;
