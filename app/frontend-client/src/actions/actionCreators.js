export function getEvents(events) {
    return {
        type: 'GET_EVENTS',
        payload: {events}
    };
}

export function setEvent(event, events) {
    return {
        type: 'SET_EVENT',
        payload: {event, events}
    };
}

export function getEvent(event) {
    return {
        type: 'GET_EVENT',
        payload: {event}
    };
}

export function changeEventName(name) {
    return {
        type: 'CHANGE_NAME',
        payload: {name}
    };
}
