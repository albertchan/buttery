// cinema actions
import {
    INVALIDATE_CINEMA,
    REQUEST_CINEMA,
    RECEIVE_CINEMA,
    INVALIDATE_CINEMAS,
    REQUEST_CINEMAS,
    RECEIVE_CINEMAS
} from '../actions/cinemaActions';


export function cinemas(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        // cinema related
        case INVALIDATE_CINEMAS:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_CINEMAS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_CINEMAS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.cinemas
            });
        default:
            return state;
    }
}

export function loadCinemas(state = { }, action) {
    switch (action.type) {
        case INVALIDATE_CINEMAS:
        case RECEIVE_CINEMAS:
        case REQUEST_CINEMAS:
            return Object.assign({}, state, cinemas(state, action));
        default:
            return state;
    }
}
