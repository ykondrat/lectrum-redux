// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

// Instruments
import { book } from './book';

import { Feed, Profile, NewPassword } from '../pages';

export default class Private extends Component {

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