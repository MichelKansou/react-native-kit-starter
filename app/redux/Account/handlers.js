import React from 'react';
import { Map } from 'immutable';
import constants from '../constants';

const authApiLoading = (state) => {
    return state.set('loading', true);
};

const authApiResponse = (state, action) => {
    console.log(action.payload);
    return state.merge(Map({
        user: action.payload,
        errors: null,
        loading: false,
        connected: action.payload ? true : false
    }));
};

const logoutApiResponse = (state, action) => {
    return state.merge(Map({
        user: null,
        errors: null,
        loading: false,
        connected: false
    }));
};

const authApiError = (state, action) => {
    return state
        .set('loading', false)
        .set('errors', action.payload.errors);
};

export default {
    [constants.AUTH_API_ERROR]: authApiError,
    [constants.AUTH_API_RESPONSE]: authApiResponse,
    [constants.AUTH_API_LOADING]: authApiLoading,
    [constants.LOGOUT_API_RESPONSE]: logoutApiResponse
};
