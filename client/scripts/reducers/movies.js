// movie actions
import {
    INVALIDATE_MOVIE,
    REQUEST_MOVIE,
    RECEIVE_MOVIE,
    INVALIDATE_MOVIES,
    REQUEST_MOVIES,
    RECEIVE_MOVIES
} from '../actions/movieActions';


export function movie(state = {
    isFetching: false,
    didInvalidate: false,
    item: []
}, action) {
    switch (action.type) {
        // movie related
        case INVALIDATE_MOVIE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_MOVIE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_MOVIE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                item: action.movie
            });
        default:
            return state;
    }
}

export function movies(state = {
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

export function loadMovie(state = { }, action) {
    switch (action.type) {
        case INVALIDATE_MOVIE:
        case RECEIVE_MOVIE:
        case REQUEST_MOVIE:
            return Object.assign({}, state, movie(state, action));
        default:
            return state;
    }
}

export function loadMovies(state = { }, action) {
    switch (action.type) {
        case INVALIDATE_MOVIES:
        case RECEIVE_MOVIES:
        case REQUEST_MOVIES:
            return Object.assign({}, state, movies(state, action));
        default:
            return state;
    }
}