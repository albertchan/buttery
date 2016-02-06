import { CALL_API } from '../middleware/api'


// Movie detail
export const INVALIDATE_MOVIE = 'INVALIDATE_MOVIE';
export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

// Movies list
export const INVALIDATE_MOVIES = 'INVALIDATE_MOVIES';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export function invalidateMovies(id) {
    if (id) {
        return {
            type: INVALIDATE_MOVIES,
            id
        };
    } else {
        return {
            type: INVALIDATE_MOVIES
        };
    }
}

function requestMovie(id) {
    if (id) {
        return {
            type: REQUEST_MOVIE,
            id
        };
    } else {
        return {
            type: REQUEST_MOVIE,
        };
    }
}

function requestMovies(id) {
    if (id) {
        return {
            type: REQUEST_MOVIES,
            id
        };
    } else {
        return {
            type: REQUEST_MOVIES,
        };
    }

}

function receiveMovie(json, id) {
    if (id) {
        return {
            type: RECEIVE_MOVIE,
            movie: json.data
        };
    } else {
        return {
            type: RECEIVE_MOVIE,
            movie: json.data
        };
    }
}

function receiveMovies(json, id) {
    if (id) {
        return {
            type: RECEIVE_MOVIES,
            movies: json.data
        };
    } else {
        return {
            type: RECEIVE_MOVIES,
            movies: json.data
        };
    }
}

function fetchMovie(id) {
    let endpoint = id ? '/api/movie/' + id : '/api/movie';

    return dispatch => {
        dispatch(requestMovie());
        return fetch(endpoint)
            .then(response => response.json())
            .then(json => dispatch(receiveMovie(json, id)));
    };
}

function fetchMovies(id) {
    let endpoint = id ? '/api/movies/' + id : '/api/movies';

    return dispatch => {
        dispatch(requestMovies());
        return fetch(endpoint)
            .then(response => response.json())
            .then(json => dispatch(receiveMovies(json, id)));
    };
}

function shouldFetchMovie(state, movie) {
    const item = state.loadMovie[movie];
    if (!item) {
        return true;
    }
    if (item.isFetching) {
        return false;
    }
    return item.didInvalidate;
}

function shouldFetchMovies(state, movie) {
    const movies = state.loadMovies[movie];
    if (!movies) {
        return true;
    }
    if (movies.isFetching) {
        return false;
    }
    return movies.didInvalidate;
}

export function fetchMovieIfNeeded(id) {
    return (dispatch, getState) => {

        if (shouldFetchMovie(getState(), id)) {
            // dispatch thunk from thunk
            return dispatch(fetchMovie(id));
        }
    };
}

export function fetchMoviesIfNeeded(id) {
    return (dispatch, getState) => {

        if (shouldFetchMovies(getState(), id)) {
            // dispatch thunk from thunk
            return dispatch(fetchMovies(id));
        }
    };
}
