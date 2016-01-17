export const CHANGE_REGION = 'CHANGE_REGION';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Change the current region for the app
export function changeRegion(id) {
    return {
        type: CHANGE_REGION,
        id
    };
}

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    };
}
