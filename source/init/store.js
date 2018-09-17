// Core
import { createStore } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducer
import { rootReducer } from './rootReducers';

// Saga
import { rootSaga } from './rootSaga';

// Middleware
import { enhancedStore, history, sagaMiddleware } from './middleware/core';

export const store = createStore(
    connectRouter(history)(rootReducer),
    enhancedStore
);

export { history };

sagaMiddleware.run(rootSaga)
