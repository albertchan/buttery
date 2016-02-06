import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { cinemas, loadCinemas } from './cinemas';
import { movie, movies, loadMovie, loadMovies } from './movies';

// common actions
import {
    CHANGE_REGION,
    RESET_ERROR_MESSAGE
} from '../actions'

// showing actions
import {
    INVALIDATE_SHOWINGS,
    REQUEST_SHOWINGS,
    RECEIVE_SHOWINGS
} from '../actions/showingActions';

import {
    RECEIVE_CINEMAS
} from '../actions/cinemaActions'


function showings(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        // showing related
        case INVALIDATE_SHOWINGS:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_SHOWINGS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_SHOWINGS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.showings
            });
        default:
            return state;
    }
}

function loadShowings(state = { }, action) {
    switch (action.type) {
        case INVALIDATE_SHOWINGS:
        case RECEIVE_SHOWINGS:
        case REQUEST_SHOWINGS:
            return Object.assign({}, state, showings(state, action));
        default:
            return state;
    }
}

function changeRegion(state = { }, action) {
    const { type, id } = action;

    switch (type) {
        case CHANGE_REGION:
            return { regionId: id };
        default:
            return state;
    }
}

function currentLocale(state = { }, action) {
    return state;
}

function currentRegion(state = { }, action) {
    return state;
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
    currentLocale,
    currentRegion,
    changeRegion,
    loadCinemas,
    loadMovie,
    loadMovies,
    loadShowings,
    errorMessage,
    router
});

export default rootReducer;
