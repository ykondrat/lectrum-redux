// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { fetchPostsWorker } from './workers/fetchPostsWorker';

function* watchFetchPosts() {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPostsWorker);
}

export function* watchPosts() {
    yield all([ call(watchFetchPosts) ]);
}
