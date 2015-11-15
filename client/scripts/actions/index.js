import { CALL_API } from '../middleware/api'


export const INVALIDATE_CINEMAS = 'INVALIDATE_CINEMAS';
export const REQUEST_CINEMAS = 'REQUEST_CINEMAS';
export const RECEIVE_CINEMAS = 'RECEIVE_CINEMAS';

export function invalidateCinemas() {
    return {
        type: INVALIDATE_CINEMAS
    };
}

function requestCinemas() {
    return {
        type: REQUEST_CINEMAS
    };
}

function receiveCinemas(json) {
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

function fetchCinemas() {
    return dispatch => {
        dispatch(requestCinemas());
        return fetch('/api/cinema')
            .then(response => response.json())
            .then(json => dispatch(receiveCinemas(json)));
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

export function fetchCinemasIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchCinemas(getState())) {
            // dispatch thunk from thunk
            return dispatch(fetchCinemas());
        }
    };
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    };
}
