// Types
import { types } from './types';

// Sync
export const startFetching = () => ({
    type: types.START_FETCHING
});

export const stopFetching = () => ({
    type: types.STOP_FETCHING
});

export const setOnlineState = () => ({
    type: types.SET_ONLINE_STATE
});

export const setOfflineState = () => ({
    type: types.SET_OFFLINE_STATE
});
