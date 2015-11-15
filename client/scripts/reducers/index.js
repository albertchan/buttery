import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { 
    INVALIDATE_CINEMAS,
    REQUEST_CINEMAS,
    RECEIVE_CINEMAS,
    RESET_ERROR_MESSAGE
} from '../actions';
// import * as ActionTypes from '../actions';


function cinemas(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
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

function loadCinemas(state = { }, action) {
    switch (action.type) {
        case INVALIDATE_CINEMAS:
        case RECEIVE_CINEMAS:
        case REQUEST_CINEMAS:
            return Object.assign({}, state, cinemas(state, action));
        default:
            return state;
    }
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
    const { type, error } = action;

    if (type === RESET_ERROR_MESSAGE) {
        return null;
    } else if (error) {
        return action.error;
    }
    return state;
}

const rootReducer = combineReducers({
    loadCinemas,
    errorMessage,
    router
});

export default rootReducer;
