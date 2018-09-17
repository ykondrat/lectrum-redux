// Types
import { types } from './types';

// Async


// Sync
export const clearProfile = () => ({
    type: types.CLEAR_PROFILE
});

export const fillProfile = (profile) => ({
    type: types.FILL_PROFILE,
    payload: profile
});
