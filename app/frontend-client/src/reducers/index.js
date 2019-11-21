import { combineReducers } from 'redux';

import eventsReducer from './events';
import eventReducer from './event';

const rootReducer = combineReducers({events: eventsReducer, event: eventReducer});

export default rootReducer;
