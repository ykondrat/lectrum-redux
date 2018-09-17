// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { authenticate } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';

export function* signupWorker({ payload }) {
    try {
        yield put(startFetching());
        const profile = yield apply(api, api.auth.signup, [ payload ]); // context, method

        console.log('profile', profile);

        yield apply(localStorage, localStorage.setItem, [ 'token', profile.token ]);
        yield put(authenticate());
    } catch (e) {
        console.error('Signup worker', e);
    } finally {
        yield put(stopFetching());
    }
}
