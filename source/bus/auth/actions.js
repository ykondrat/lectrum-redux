// Types
import { types } from './types';

// Async
export const signupAsync = (userData) => ({
    type: types.SIGNUP_ASYNC,
    payload: userData
});

export const loginAsync = (credentials) => ({
    type: types.LOGIN_ASYNC,
    payload: credentials
});

export const authenticateAsync = (credentials) => ({
    type: types.AUTHENTICATE_ASYNC,
    payload: credentials
});

export const initializeAsync = () => ({
    type: types.INITIALIZE_ASYNC
});

export const logoutAsync = () => ({
    type: types.LOGOUT_ASYNC
});

// Sync
export const authenticate = () => ({
    type: types.AUTHENTICATE
});

export const initialize = () => ({
    type: types.INITIALIZE
});

export const logout = () => ({
    type: types.LOGOUT
});
