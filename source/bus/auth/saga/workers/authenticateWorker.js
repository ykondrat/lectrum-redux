// Core
import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

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

        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
    } catch (e) {
        console.error('Authenticate worker', e);
    } finally {
        yield put(initialize());
        yield put(stopFetching());
    }
}
