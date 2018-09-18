// Core
import { put, apply, call } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../../API';
import { authenticate } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';
import { fillProfile } from '../../../profile/actions';

export function* loginWorker({ payload }) {
    try {
        yield put(startFetching());

        const profile = yield apply(api, api.auth.login, [ payload ]); // context, method
        debugger;
        if (payload.remember) {
            yield apply(localStorage, localStorage.setItem, [ 'remember', true ]);
        }

        yield apply(localStorage, localStorage.setItem, [ 'token', profile.token ]);

        yield put(authenticate());
        const { firstName, lastName } = profile;
        yield put(fillProfile(profile));
        yield put(actions.merge('forms.user.profile', { firstName, lastName }));
    } catch (e) {
        console.error('Login worker', e);
    } finally {
        yield put(stopFetching());
    }
}
