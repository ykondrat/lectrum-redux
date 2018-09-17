// Core
import { put, apply, call, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { unlikePost } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';

export function* unlikePostWorker({ payload: postId }) {
    try {
        yield put(startFetching());

        yield apply(api, api.posts.like, [postId]); // context, method

        const userId = yield select((state) => state.profile.get('id'));

        yield put(unlikePost({ postId, userId }));
    } catch (e) {
        console.error('Unlike post worker', e);
    } finally {
        yield put(stopFetching());
    }
}
