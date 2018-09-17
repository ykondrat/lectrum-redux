// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { createPost } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';

export function* createPostWorker({ payload: comment }) {
    try {
        yield put(startFetching());

        const post = yield apply(api, api.posts.create, [ comment ]); // context, method

        yield put(createPost(post));
    } catch (e) {
        console.error('Create post worker', e);
    } finally {
        yield put(stopFetching());
    }
}
