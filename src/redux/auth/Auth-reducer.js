import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../auth';

const initialState = {
    name: null,
    email: null,
};

const user = createReducer(initialState, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logoutSuccess]: () => initialState,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const cleanError = () => null;

const error = createReducer(null, {
    [authActions.registerError]: setError,
    [authActions.loginError]: setError,
    [authActions.logoutError]: setError,
    [authActions.getCurrentUserError]: setError,
    [authActions.registerRequest]: cleanError,
    [authActions.loginRequest]: cleanError,
    [authActions.logoutRequest]: cleanError,
    [authActions.getCurrentUserRequest]: cleanError,
});

const isAuthenticated = createReducer(false, {
    [authActions.registerSuccess]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.getCurrentUserSuccess]: () => true,
    [authActions.registerError]: () => false,
    [authActions.loginError]: () => false,
    [authActions.getCurrentUserError]: () => false,
    [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
    user,
    token,
    error,
    isAuthenticated,
});
