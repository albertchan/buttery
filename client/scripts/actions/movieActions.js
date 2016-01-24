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

function receiveMovies(json, id) {
    if (id) {
        return {
            type: RECEIVE_MOVIES,
            movie: json.data,
            id: id
        };
    } else {
        //const data = json.data.map(obj => {
        //    const rObj = {};
        //    rObj[obj.id] = {
        //        title: obj.title,
        //        image: obj.image
        //    };
        //    return rObj;
        //});
        const data = json.data;

        return {
            type: RECEIVE_MOVIES,
            movies: data
        };
    }
}

function fetchMovies(id) {
    //let endpoint = id ? '/api/movie/' + id : '/api/movie';
    let endpoint = id ? '/api/movies/' + id : '/api/movies';

    return dispatch => {
        dispatch(requestMovies());
        // return fetch('/api/cinema')
        return fetch(endpoint)
            .then(response => response.json())
            .then(json => dispatch(receiveMovies(json, id)));
    };
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

export function fetchMoviesIfNeeded(id) {
    return (dispatch, getState) => {

        if (shouldFetchMovies(getState(), id)) {
            // dispatch thunk from thunk
            return dispatch(fetchMovies(id));
        }
    };
}
