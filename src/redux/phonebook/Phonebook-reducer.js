import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
} from './Phonebook-actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
});

const setError = (_, { payload }) => payload;
const cleanError = () => null;

const error = createReducer(null, {
    [addContactError]: setError,
    [deleteContactError]: setError,
    [fetchContactsError]: setError,
    [addContactSuccess]: cleanError,
    [deleteContactSuccess]: cleanError,
    [fetchContactsSuccess]: cleanError,
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});
