export function getEvents(events) {
    return {
        type: 'GET_EVENTS',
        payload: {events}
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
