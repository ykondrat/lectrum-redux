// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { fillPosts } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';

export function* fetchPostsWorker() {
    yield put(startFetching());
    // const post = yield call([ api, api.posts.get]); // context, method
    // const post = yield call([ api, api.posts.get], 1, 2); // [context, method], arg
    // const post = yield apply(api, api.posts.get, [1, 2]); // context, method, [ arg ]
    const post = yield apply(api, api.posts.get); // context, method

    yield put(fillPosts(post));
    yield put(stopFetching());
}
