// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { fetchUiWorker } from './workers/fetchUiWorker';

function* watchFetchUi() {
    yield takeEvery(types.START_FETCHING, fetchUiWorker);
}

export function* watchUi() {
    yield all([ call(watchFetchUi) ]);
}
