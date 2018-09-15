import {
    SHOW_NEXT_PHOTO,
    SHOW_PREV_PHOTO,
    SHOW_PHOTO
} from './types';

export const showNextPhoto = () => ({
    type: SHOW_NEXT_PHOTO
});

export const showPrevPhoto = () => ({
    type: SHOW_PREV_PHOTO
});

export const showPhoto = (value) => ({
    type: SHOW_PHOTO,
    payload: value
});
