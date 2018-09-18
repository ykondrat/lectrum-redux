// Core
import { Map } from 'immutable';

// Reducer
import { profileReducer } from '../reducer';

import * as actions from '../actions';

const actionTest = {
    type: 'INIT_TEST_DEFAULT'
}

const initialState = Map({
    id: '',
    firstName: '',
    lastName: '',
    token: '',
    avatar: ''
});


describe('profile reducer tests:', () => {
    test('profileReducer test for default switch case', () => {
        expect(
            profileReducer( void 0, actionTest)
        ).toEqual(initialState);
    });

    // test('profileReducer test for fillProfile', () => {
    //     expect(
    //         profileReducer( void 0, actions.fillProfile(__.userProfile))
    //     ).toEqual(initialState);
    // });

    test('profileReducer test for clearProfile', () => {
        expect(
            profileReducer( void 0, actions.clearProfile())
        ).toEqual(initialState);
    });

});
