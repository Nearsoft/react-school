const defaultState = {
    title: '',
    description: '',
    limit: 0,
    thumbnail_url: '',
    address: ''
};

function eventReducer(state = defaultState, action) {
    switch (action.type) {
        case 'GET_EVENT':
            return {
                ...state,
                ...action.payload.event,
            };
        case 'SET_EVENT':
            return {
                ...state,
                ...action.payload.event
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
