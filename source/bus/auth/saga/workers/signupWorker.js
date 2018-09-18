// Core
import { put, apply, call } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

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
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
    } catch (e) {
        console.error('Signup worker', e);
    } finally {
        yield put(stopFetching());
    }
}
