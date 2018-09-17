// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { authenticate } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';
import { fillProfile } from '../../../profile/actions';

export function* signupWorker({ payload }) {
    try {
        yield put(startFetching());

        const profile = yield apply(api, api.auth.signup, [ payload ]); // context, method

        yield apply(localStorage, localStorage.setItem, [ 'token', profile.token ]);

        yield put(authenticate());

        yield put(fillProfile(profile));
    } catch (e) {
        console.error('Signup worker', e);
    } finally {
        yield put(stopFetching());
    }
}
