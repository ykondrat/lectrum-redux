// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { authenticate, initialize } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';
import { fillProfile } from '../../../profile/actions';

export function* authenticateWorker() {
    try {
        yield put(startFetching());

        const token = yield apply(localStorage, localStorage.getItem, [ 'token' ]);
        
        const profile = yield apply(api, api.auth.login, [ { token } ]);

        yield put(authenticate());

        yield put(fillProfile(profile));
    } catch (e) {
        console.error('Login worker', e);
    } finally {
        yield put(initialize());
        yield put(stopFetching());
    }
}
