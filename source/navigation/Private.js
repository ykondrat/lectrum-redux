// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

// Instruments
import { book } from './book';

import { Feed, Profile, NewPassword } from '../pages';
// Socket
import { socket } from '../init/socket';

export default class Private extends Component {

    componentDidMount () {
        this.props.listenPosts();
    }

    componentWillUnmount () {
        socket.removeAllListeners();
    }

    render () {
        return (
            <Switch>
                <Route
                    exact
                    component = { Feed }
                    path = { book.feed }
                />
                <Route
                    exact
                    component = { Profile }
                    path = { book.profile }
                />
                <Route
                    exact
                    component = { NewPassword }
                    path = { book.newPassword }
                />
                <Redirect to = { book.feed }/>
            </Switch>
        );
    }

}
