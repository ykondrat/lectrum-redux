// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { authenticateAsync, initialize } from '../../actions';
import { fillProfile } from '../../../profile/actions';

export function* initializeWorker() {
    try {
        const token = yield apply(localStorage, localStorage.getItem, [ 'token' ]);
        
        if (token) {
            yield put(authenticateAsync());
        } else {
            yield put(initialize());
        }
    } catch (e) {
        console.error('Initialize worker', e);
    }
}
