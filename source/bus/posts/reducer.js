// Core
import { List, fromJS } from 'immutable';

// Types
import { types } from './types';

const initialState = List();

const findPostIndex = (state, postId) => {
    const index = state.findIndex((post) => post.get('id') === postId);

    return index;
}

export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);

        case types.LIKE_POST:
            return state.updateIn(
                [findPostIndex(state, action.payload.postId), 'likes'],
                (likes) => likes.unshift(action.payload.liker)
            );

        case types.UNLIKE_POST:
            return state.updateIn(
                [findPostIndex(state, action.payload.postId), 'likes'],
                (likes) => likes.filter((liker) => liker.get('id') !== action.payload.userId)
            );

        case types.CREATE_POST:
            return state.unshift(fromJS(action.payload));

        case types.REMOVE_POST:
            return state.remove(findPostIndex(state, action.payload));

        default:
            return state;
    }

}
