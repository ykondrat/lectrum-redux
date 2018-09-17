// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signupWorker } from './workers/signupWorker';

function* watchSignup() {
    yield takeEvery(types.SIGNUP_ASYNC, signupWorker);
}

export function* watchAuth() {
    yield all([ call(watchSignup) ]);
}
