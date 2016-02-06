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
            type: REQUEST_CINEMAS
        };
    }

}

function receiveCinemas(json, id) {
    const data = json.data.map(obj => {
        const rObj = {};
        rObj[obj.id] = obj.name;
        return rObj;
    });

    if (id) {
        return {
            type: RECEIVE_CINEMAS,
            cinemas: data,
            id: id
        };
    } else {
        return {
            type: RECEIVE_CINEMAS,
            cinemas: data
        };
    }
}

function fetchCinema(id) {
    if (!id) return;
    let endpoint = '/api/cinema/' + id;

    return dispatch => {
        dispatch(requestCinemas());
        return fetch(endpoint)
            .then(response => response.json())
            .then(json => dispatch(receiveCinema(json, id)));
    };
}

function fetchCinemas(id) {
    let endpoint = id ? '/api/cinemas/' + id : '/api/cinemas';

    return dispatch => {
        dispatch(requestCinemas());
        return fetch(endpoint)
            .then(response => response.json())
            .then(json => dispatch(receiveCinemas(json, id)));
    };
}

function shouldFetchCinema(state, cinemaId) {
    const cinema = state.loadCinema[cinemaId];
    if (!cinema) {
        return true;
    }
    if (cinema.isFetching) {
        return false;
    }
    return cinema.didInvalidate;
}

function shouldFetchCinemas(state, cinemaId) {
    const cinemas = state.loadCinemas[cinemaId];
    if (!cinemas) {
        return true;
    }
    if (cinemas.isFetching) {
        return false;
    }
    return cinemas.didInvalidate;
}

export function fetchCinemaIfNeeded(id) {
    return (dispatch, getState) => {

        if (shouldFetchCinema(getState(), id)) {
            // dispatch thunk from thunk
            return dispatch(fetchCinema(id));
        }
    };
}

export function fetchCinemasIfNeeded(id) {
    return (dispatch, getState) => {

        if (shouldFetchCinemas(getState(), id)) {
            // dispatch thunk from thunk
            return dispatch(fetchCinemas(id));
        }
    };
}
