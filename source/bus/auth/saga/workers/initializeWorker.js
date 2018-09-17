// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { authenticateAsync, initialize } from '../../actions';

export function* initializeWorker() {
    try {
        const token = yield apply(localStorage, localStorage.getItem, [ 'remember' ]);

        if (token) {
            yield put(authenticateAsync());
        } else {
            yield put(initialize());
        }
    } catch (e) {
        console.error('Initialize worker', e);
    }
}
