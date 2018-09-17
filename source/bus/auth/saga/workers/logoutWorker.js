// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { logout } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';
import { clearProfile } from '../../../profile/actions';

export function* logoutWorker() {
    try {
        yield put(startFetching());

        const token = yield apply(localStorage, localStorage.getItem, [ 'token' ]);

        yield apply(api, api.auth.logout, [ token ]);
    } catch (e) {
        console.error('Logout worker', e);
    } finally {
        yield apply(localStorage, localStorage.removeItem, [ 'token' ]);
        yield apply(localStorage, localStorage.removeItem, [ 'remember' ]);

        yield put(logout());

        yield put(stopFetching());

        yield put(clearProfile());
    }
}
