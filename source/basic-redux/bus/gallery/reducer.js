import { SHOW_NEXT_PHOTO, SHOW_PREV_PHOTO, SHOW_PHOTO } from './types';

import photo1 from '../../../theme/assets/photos/1.jpeg';
import photo2 from '../../../theme/assets/photos/2.jpeg';
import photo3 from '../../../theme/assets/photos/3.jpeg';
import photo4 from '../../../theme/assets/photos/4.jpeg';

const initialState = {
    photos: [
        { id: 1, url: photo1 },
        { id: 2, url: photo2 },
        { id: 3, url: photo3 },
        { id: 4, url: photo4 },
    ],
    selectedPhotoIndex: 0,
};

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NEXT_PHOTO:
            return {
                ...state,
                selectedPhotoIndex: state.selectedPhotoIndex + 1 === state.photos.length ? 0 : state.selectedPhotoIndex + 1,
            };
        case SHOW_PREV_PHOTO:
            return {
                ...state,
                selectedPhotoIndex: state.selectedPhotoIndex - 1 < 0 ? state.photos.length - 1 : state.selectedPhotoIndex - 1,
            };
        case SHOW_PHOTO:
            return {
                ...state,
                selectedPhotoIndex: action.payload
            }
        default:
            return state;
    }
}
