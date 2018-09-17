// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Routing
import Private from './Private';
import Public from './Public';
import { Loading } from '../components';

// Actions
import {  initializeAsync } from '../bus/auth/actions';
import { listenConnection, listenPosts } from '../bus/socket/actions';
// Socket
import { socket, joinSocketChannel } from '../init/socket';

const mapStateToProps = (state) => {
    return ({
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialized: state.auth.get('isInitialized')
    });
}

@hot(module)
@withRouter // To fix bug with react-router and redux (run forceUpdate())
@connect(mapStateToProps, { initializeAsync, listenConnection, listenPosts })
export default class App extends Component {

    componentDidMount () {
        this.props.initializeAsync();
        this.props.listenConnection();
        joinSocketChannel();
    }

    componentWillUnmount () {
        socket.removeAllListeners();
    }

    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props;

        if (!isInitialized) {
            return <Loading/>
        }

        return (
            isAuthenticated ? <Private listenPosts = { listenPosts } socket = {socket}/> : <Public />
        );
    }

}
