import { CALL_API } from '../middleware/api'


// Showings list
export const INVALIDATE_SHOWINGS = 'INVALIDATE_SHOWINGS';
export const REQUEST_SHOWINGS = 'REQUEST_SHOWINGS';
export const RECEIVE_SHOWINGS = 'RECEIVE_SHOWINGS';

export function invalidateShowings(id) {
    if (id) {
        return {
            type: SHOWINGS_MOVIES,
            id
        };
    } else {
        return {
            type: SHOWINGS_MOVIES
        };
    }
}

function requestShowings(id) {
    if (id) {
        return {
            type: REQUEST_SHOWINGS,
            id
        };
    } else {
        return {
            type: REQUEST_SHOWINGS,
        };
    }
}

function receiveShowings(json, id) {
    if (id) {
        return {
            type: RECEIVE_SHOWINGS,
            movie: json.data,
            id: id
        };
    } else {
        const data = json.data;

        return {
            type: RECEIVE_SHOWINGS,
            movies: data
        };
    }
}

function fetchShowings(id) {
    let endpoint = id ? '/api/showings/' + id : '/api/showings';

    return dispatch => {
        dispatch(requestShowings());
        return fetch(endpoint)
            .then(response => response.json())
            .then(json => dispatch(receiveShowings(json, id)));
    };
}

function shouldFetchShowings(state, showing) {
    const showings = state.loadShowings[showing];
    if (!showings) {
        return true;
    }
    if (showings.isFetching) {
        return false;
    }
    return showings.didInvalidate;
}

export function fetchShowingsIfNeeded(id) {
    return (dispatch, getState) => {

        if (shouldFetchShowings(getState(), id)) {
            // dispatch thunk from thunk
            return dispatch(fetchShowings(id));
        }
    };
}