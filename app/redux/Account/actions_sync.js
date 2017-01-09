import constants from '../constants';

export function authApiLoading () {
    return {
        type: constants.AUTH_API_LOADING
    };
}

export function authApiResponse (json) {
    return {
        type: constants.AUTH_API_RESPONSE,
        payload: json
    };
}

export function authApiError (json) {
    return {
        type: constants.AUTH_API_ERROR,
        payload: json
    };
}

export function logoutApiResponse (json) {
    return {
        type: constants.LOGOUT_API_RESPONSE,
        payload: json
    }
}
