// Types
import { types } from './types';

// Sync
export const startFetching = () => ({
    type: types.START_FETCHING
});

export const stopFetching = () => ({
    type: types.STOP_FETCHING
});
