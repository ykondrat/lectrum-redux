// Types
import { types } from './types';

// Async
export const fetchPostsAsync = () => ({
    type: types.FETCH_POSTS_ASYNC
});
export const likePostAsync = (postId) => ({
    type: types.LIKE_POST_ASYNC,
    payload: postId
});
export const unlikePostAsync = (postId) => ({
    type: types.UNLIKE_POST_ASYNC,
    payload: postId
});
export const createPostAsync = (comment) => ({
    type: types.CREATE_POST_ASYNC,
    payload: comment
});
export const removePostAsync = (postId) => ({
    type: types.REMOVE_POST_ASYNC,
    payload: postId
});

// Sync
export const fillPosts = (posts) => ({
    type: types.FILL_POSTS,
    payload: posts
});
export const likePost = (likedPost) => ({
    type: types.LIKE_POST,
    payload: likedPost
});
export const unlikePost = (unlikedPost) => ({
    type: types.UNLIKE_POST,
    payload: unlikedPost
});
export const createPost = (post) => ({
    type: types.CREATE_POST,
    payload: post
});
export const removePost = (postId) => ({
    type: types.REMOVE_POST,
    payload: postId
});
