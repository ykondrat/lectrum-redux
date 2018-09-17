// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { authenticate } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';
import { fillProfile } from '../../../profile/actions';

export function* loginWorker({ payload }) {
    try {
        yield put(startFetching());

        const profile = yield apply(api, api.auth.login, [ payload ]); // context, method

        if (payload.remember) {
            yield apply(localStorage, localStorage.setItem, [ 'token', profile.token ]);
        }

        yield put(authenticate());

        yield put(fillProfile(profile));
    } catch (e) {
        console.error('Login worker', e);
    } finally {
        yield put(stopFetching());
    }
}
