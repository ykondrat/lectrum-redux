import { expectSaga } from 'redux-saga-test-plan';
import { put, apply, call } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../API';
import { authenticate, loginAsync } from '../actions';
import { startFetching, stopFetching } from '../../ui/actions';
import { fillProfile } from '../../profile/actions';
import { loginWorker } from '../saga/workers/loginWorker';

const { firstName, lastName } = __.userProfile;


describe('loginWorker SAGA tests:', () => {
    test('should complete scenario with status code 200 and remember true', async () => {
        await expectSaga(loginWorker, loginAsync(__.credentials))
            // Spy
            .provide([
                [
                    apply(api, api.auth.login, [ __.credentials ]), __.userProfile
                ]
            ])
            // Scenario
            .put(startFetching())
            .apply(api, api.auth.login, [ __.credentials ])
            .apply(localStorage, localStorage.setItem, [ 'remember', true ])
            .put(authenticate())
            .put(fillProfile(__.userProfile))
            // .put(
            //     actions.merge(
            //         'forms.user.profile',
            //         { firstName, lastName }
            //     )
            // )
            .put(stopFetching())
            .run();
    });

    test('should complete scenario with status code 400 or 401', async () => {
        await expectSaga(loginWorker, loginAsync(__.credentials))
            // Spy
            .provide([
                [
                    apply(api, api.auth.login, [ __.credentials ]), __.fetchResponseFail401
                ]
            ])
            // Scenario
            .put(startFetching())
            .apply(api, api.auth.login, [ __.credentials ])
            // .apply(console.error('Login worker', e))
            // .put(authenticate())
            // .put(fillProfile(__.userProfile))
            // .put(
            //     actions.merge(
            //         'forms.user.profile',
            //         { firstName, lastName }
            //     )
            // )
            .throw(new Error('whoops'))
            .put(stopFetching())
            .run();
    });
});
