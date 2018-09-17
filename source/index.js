// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// Instruments
import './theme/init';

// Store
import { store, history } from './init/store';

// Intro
import App from './navigation/App';

render(
    <Provider store = { store }>
        <ConnectedRouter history = { history }>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
