import { CALL_API } from '../middleware/api'


// Cinema detail
export const INVALIDATE_CINEMA = 'INVALIDATE_CINEMA';
export const REQUEST_CINEMA = 'REQUEST_CINEMA';
export const RECEIVE_CINEMA = 'RECEIVE_CINEMA';

// Cinemas list
export const INVALIDATE_CINEMAS = 'INVALIDATE_CINEMAS';
export const REQUEST_CINEMAS = 'REQUEST_CINEMAS';
export const RECEIVE_CINEMAS = 'RECEIVE_CINEMAS';

export function invalidateCinemas(id) {
    if (id) {
        return {
            type: INVALIDATE_CINEMAS,
            id
        };
    } else {
        return {
            type: INVALIDATE_CINEMAS
        };
    }
}

function requestCinemas(id) {
    if (id) {
        return {
            type: REQUEST_CINEMAS,
            id
        };
    } else {
        return {
            type: REQUEST_CINEMAS,
        };
    }

}

function receiveCinemas(json, id) {
    if (id) {
        return {
            type: RECEIVE_CINEMAS,
            cinema: json.data,
            id: id
        };
    } else {
        const data = json.data.map(obj => {
            const rObj = {};
            rObj[obj.id] = obj.name;
            return rObj;
        });

        return {
            type: RECEIVE_CINEMAS,
            cinemas: data
        };
    }
}

function fetchCinemas(id) {
    let endpoint = id ? '/api/cinema/' + id : '/api/cinema';

    return dispatch => {
        dispatch(requestCinemas());
        // return fetch('/api/cinema')
        return fetch(endpoint)
            .then(response => response.json())
            .then(json => dispatch(receiveCinemas(json, id)));
    };
}

function shouldFetchCinemas(state, cinema) {
    const cinemas = state.loadCinemas[cinema];
    if (!cinemas) {
        return true;
    }
    if (cinemas.isFetching) {
        return false;
    }
    return cinemas.didInvalidate;
}

export function fetchCinemasIfNeeded(id) {
    return (dispatch, getState) => {

        if (shouldFetchCinemas(getState(), id)) {
            // dispatch thunk from thunk
            return dispatch(fetchCinemas(id));
        }
    };
}
