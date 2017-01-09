import handlers from './handlers';
import { fromJS } from 'immutable';
import * as sync from './actions_sync';
import * as async from './actions_async';

export const actions = {
    login: async.login,
    logout: async.logout,
    getAccount: async.getAccount,
    authApiResponse: sync.authApiResponse,
    authApiLoading: sync.authApiLoading
};

export const initialState = fromJS({
    user: null,
    errors: null,
    connected: false,
    loading: false,
});

export default function (state = initialState, action) {
    const handler = handlers[action.type];

    return handler ? handler(state, action) : state;
};
