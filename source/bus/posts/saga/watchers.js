// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { fetchPostsWorker } from './workers/fetchPostsWorker';
import { likePostWorker } from './workers/likePostWorker';
import { unlikePostWorker } from './workers/unlikePostWorker';
import { createPostWorker } from './workers/createPostWorker';
import { removePostWorker } from './workers/removePostWorker';

function* watchFetchPosts() {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPostsWorker);
}
function* watchLikePost() {
    yield takeEvery(types.LIKE_POST_ASYNC, likePostWorker);
}
function* watchUnlikePost() {
    yield takeEvery(types.UNLIKE_POST_ASYNC, unlikePostWorker);
}
function* watchCreatePost() {
    yield takeEvery(types.CREATE_POST_ASYNC, createPostWorker);
}
function* watchRemovePost() {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePostWorker);
}
export function* watchPosts() {
    yield all([
        call(watchFetchPosts),
        call(watchLikePost),
        call(watchUnlikePost),
        call(watchCreatePost),
        call(watchRemovePost)
    ]);
}
