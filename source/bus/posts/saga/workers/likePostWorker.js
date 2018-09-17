// Core
import { put, apply, call, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { likePost } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';

export function* likePostWorker({ payload: postId }) {
    try {
        yield put(startFetching());

        yield apply(api, api.posts.like, [postId]); // context, method

        const liker = yield select((state) => state.profile.removeAll(['avatar', 'token']));

        yield put(likePost({ postId, liker }));
    } catch (e) {
        console.error('Like post worker', e);
    } finally {
        yield put(stopFetching());
    }
}
