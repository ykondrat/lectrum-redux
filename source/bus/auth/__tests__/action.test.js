import * as actions from '../actions';
import { types } from '../types';

describe('auth actions tests:', () => {
    test('signupAsync test', () => {
        expect(actions.signupAsync(__.userProfile)).toEqual({
            type: types.SIGNUP_ASYNC,
            payload: __.userProfile
        });
    });
    test('loginAsync test', () => {
        expect(actions.loginAsync(__.credentials)).toEqual({
            type: types.LOGIN_ASYNC,
            payload: __.credentials
        });
    });
    test('authenticateAsync test', () => {
        expect(actions.authenticateAsync(__.credentials)).toEqual({
            type: types.AUTHENTICATE_ASYNC,
            payload: __.credentials
        });
    });
    test('initializeAsync test', () => {
        expect(actions.initializeAsync()).toEqual({
            type: types.INITIALIZE_ASYNC
        });
    });
    test('logoutAsync test', () => {
        expect(actions.logoutAsync()).toEqual({
            type: types.LOGOUT_ASYNC
        });
    });
    test('authenticate test', () => {
        expect(actions.authenticate()).toEqual({
            type: types.AUTHENTICATE
        });
    });
    test('initialize test', () => {
        expect(actions.initialize()).toEqual({
            type: types.INITIALIZE
        });
    });
    test('logout test', () => {
        expect(actions.logout()).toEqual({
            type: types.LOGOUT
        });
    });
});
