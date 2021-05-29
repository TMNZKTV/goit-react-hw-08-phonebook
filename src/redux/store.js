import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import phonebookReducer from './phonebook/Phonebook-reducer';
import authReducer from './auth/Auth-reducer';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        phonebook: phonebookReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
