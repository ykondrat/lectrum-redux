import { combineReducers } from 'redux';

import { galleryReducer as gallery } from '../bus/gallery/reducer';

export const rootReducer = combineReducers({
    gallery,
});
