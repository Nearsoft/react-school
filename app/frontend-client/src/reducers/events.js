const defaultState = [];

function eventsReducer(state = defaultState, action) {
    switch (action.type) {
        case 'GET_EVENTS':
            return [...state, ...action.payload.events];
        default:
          return state;
      }
}

export default eventsReducer;
