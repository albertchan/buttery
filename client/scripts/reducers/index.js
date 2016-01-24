import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

// common actions
import {
    CHANGE_REGION,
    RESET_ERROR_MESSAGE
} from '../actions'

// cinema actions
import {
    INVALIDATE_CINEMA,
    REQUEST_CINEMA,
    RECEIVE_CINEMA,
    INVALIDATE_CINEMAS,
    REQUEST_CINEMAS,
    RECEIVE_CINEMAS
} from '../actions/cinemaActions';

// movie actions
import {
    INVALIDATE_MOVIE,
    REQUEST_MOVIE,
    RECEIVE_MOVIE,
    INVALIDATE_MOVIES,
    REQUEST_MOVIES,
    RECEIVE_MOVIES
} from '../actions/movieActions';

// showing actions
import {
    INVALIDATE_SHOWINGS,
    REQUEST_SHOWINGS,
    RECEIVE_SHOWINGS
} from '../actions/showingActions';


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
        default:
            return state;
    }
}

function movies(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
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
            return Object.assign({}, state, movies(state, action));
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
    loadShowings,
    errorMessage,
    router
});

export default rootReducer;
