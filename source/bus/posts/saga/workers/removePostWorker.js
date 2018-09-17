// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { removePost } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';

export function* removePostWorker({ payload: postId }) {
    try {
        yield put(startFetching());

        yield apply(api, api.posts.remove, [ postId ]); // context, method

        yield put(removePost(postId));
    } catch (e) {
        console.error('Remove post worker', e);
    } finally {
        yield put(stopFetching());
    }
}
