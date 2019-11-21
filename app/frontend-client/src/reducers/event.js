const defaultState = {
    description: '',
    name: '',
};

function eventReducer(state = defaultState, action) {
    switch (action.type) {
        case 'GET_EVENT':
            return {
                ...state,
                ...action.payload.event,
            };
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload.name,
            };
        default:
            return state;
    }
}

export default eventReducer;
