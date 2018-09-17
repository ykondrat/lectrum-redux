// Core
import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

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

const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composerEnhancer = __DEV__ && devtools ? devtools : compose;

const middleware = [ routerMiddleware, sagaMiddleware ];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composerEnhancer(applyMiddleware(...middleware));

export { enhancedStore, history, sagaMiddleware };
