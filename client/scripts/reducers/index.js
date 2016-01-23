import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

// import * as ActionTypes from '../actions';
import {
    // common
    CHANGE_REGION
} from '../actions'

import {
    // cinema
    INVALIDATE_CINEMA,
    REQUEST_CINEMA,
    RECEIVE_CINEMA,
    INVALIDATE_CINEMAS,
    REQUEST_CINEMAS,
    RECEIVE_CINEMAS
} from '../actions/cinemaActions';

import {
    // movie
    INVALIDATE_MOVIE,
    REQUEST_MOVIE,
    RECEIVE_MOVIE,
    INVALIDATE_MOVIES,
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
    RESET_ERROR_MESSAGE
} from '../actions/movieActions';


function cinemas(state = {
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
            //if (action.id) {
            //    return Object.assign({}, state, {
            //        isFetching: false,
            //        didInvalidate: false,
            //        item: action.cinema
            //    });
            //} else {
            //    return Object.assign({}, state, {
            //        isFetching: false,
            //        didInvalidate: false,
            //        items: action.cinemas
            //    });
            //}
        // movie related
        case INVALIDATE_MOVIES:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_MOVIES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_MOVIES:
            if (action.id) {
                return Object.assign({}, state, {
                    isFetching: false,
                    didInvalidate: false,
                    item: action.movie
                });
            } else {
                return Object.assign({}, state, {
                    isFetching: false,
                    didInvalidate: false,
                    items: action.movies
                });
            }
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

function loadMovies(state = { }, action) {
    switch (action.type) {
        case INVALIDATE_MOVIES:
        case RECEIVE_MOVIES:
        case REQUEST_MOVIES:
            return Object.assign({}, state, cinemas(state, action));
        default:
            return state;
    }
}

function changeRegion(state = { }, action) {
    const { type, id } = action;

    if (type === RECEIVE_CINEMAS && id !== undefined) {
        return Object.assign({}, state, cinemas(state, action));
    }
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
    changeRegion,
    loadCinemas,
    loadMovies,
    errorMessage,
    router
});

export default rootReducer;
