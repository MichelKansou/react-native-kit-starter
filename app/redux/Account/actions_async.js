import {GoogleSignin} from 'react-native-google-signin';
import { authApiResponse, authApiLoading, authApiError, logoutApiResponse } from './actions_sync';

export const login = () => {
    return (dispatch, getState) => {
        dispatch(authApiLoading());
        return new Promise((resolve, reject) => {
            GoogleSignin.signIn()
                .then((json) => {
                    dispatch(authApiResponse(json));
                    resolve();
                })
                .catch((err) => {
                    dispatch(authApiError(err));
                    reject(getState().account.get('errors'));
                })
            .done();
        });
    };
};

export const getAccount = () => {
    return (dispatch, getState) => {
        dispatch(authApiLoading());
        return new Promise((resolve, reject) => {
            GoogleSignin.currentUserAsync()
                .then((user) => {
                      dispatch(authApiResponse(user));
                      resolve();
                })
                .catch((err) => {
                    dispatch(authApiError(err));
                    reject(getState().account.get('errors'));
                })
            .done();
        });
    };
};

export const logout = () => {
    return (dispatch, getState) => {
        dispatch(authApiLoading());
        return new Promise((resolve, reject) => {
            GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
                  dispatch(logoutApiResponse(null));
                })
            .done();
        });
    };
};
