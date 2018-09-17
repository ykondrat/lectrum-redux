// Types
import { types } from './types';

// Async
export const fetchPostsAsync = () => ({
    type: types.FETCH_POSTS_ASYNC
});

// Sync
export const fillPosts = (posts) => ({
    type: types.FILL_POSTS,
    payload: posts
});
