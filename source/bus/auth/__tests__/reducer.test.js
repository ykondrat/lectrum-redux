// Core
import { Map } from 'immutable';

// Reducer
import { authReducer } from '../reducer';

import * as actions from '../actions';

const actionTest = {
    type: 'INIT_TEST_DEFAULT'
}

const initialState = Map({
    isAuthenticated: false,
    isInitialized: false
});

describe('auth reducer tests:', () => {
    test('authReducer test for default switch case', () => {
        // void 0 === undefined
        expect(
            authReducer( void 0, actionTest)
        ).toEqual(initialState);
    });

    test('authReducer test for authenticate', () => {
        expect(
            authReducer(void 0, actions.authenticate())
        ).toEqual(initialState.set('isAuthenticated', true));
    });

    test('authReducer test for initialize', () => {
        expect(
            authReducer(void 0, actions.initialize())
        ).toEqual(initialState.set('isInitialized', true));
    });
    test('authReducer test for logout', () => {
        expect(
            authReducer(void 0, actions.logout())
        ).toEqual(initialState.set('isAuthenticated', false));
    });
});
