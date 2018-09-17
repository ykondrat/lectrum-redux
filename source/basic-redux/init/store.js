import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';

import { rootReducer } from './rootReducers';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title: (action) => {
            return action.error ? 'firebrick' : 'deepskyblue';
        },
        prevState: () => 'dodgerblue',
        action:    () => 'greenyellow',
        nextState: () => 'olivedrab',
        error:     () => 'firebrick',
    },
});

const persistedState = JSON.parse(localStorage.getItem('gallery'));
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composerEnhancer = devtools ? devtools : compose;
const enhancedStore = composerEnhancer(applyMiddleware(logger));

export const store = persistedState ?
    createStore(rootReducer, persistedState, enhancedStore):
    createStore(rootReducer, enhancedStore)

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('gallery', JSON.stringify(state));
})
