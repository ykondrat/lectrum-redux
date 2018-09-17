// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { fillPosts } from '../../actions';

export function* fetchUiWorker() {
    console.log('UI worker');
}
