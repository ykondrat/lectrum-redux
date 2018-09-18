import * as actions from '../actions';
import { types } from '../types';

describe('profile actions tests:', () => {

    test('clearProfile test', () => {
        expect(actions.clearProfile()).toEqual({
            type: types.CLEAR_PROFILE
        });
    });

    test('fillProfile test', () => {
        expect(actions.fillProfile(__.userProfile)).toEqual({
            type: types.FILL_PROFILE,
            payload: __.userProfile
        });
    });
});
