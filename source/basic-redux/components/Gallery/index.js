// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { store } from '../../init/store';

import { showNextPhoto, showPrevPhoto, showPhoto } from '../../bus/gallery/actions';


// Instruments
import Styles from './styles.m.css';
import cx from 'classnames';

@hot(module)
export default class Gallery extends Component {

    componentDidMount () {
        this.subscription  = store.subscribe(() => {this.forceUpdate()});
    }

    componentWillUnmount () {
        this.subscription();
    }

    _handleShowNextPhoto = () => {
        store.dispatch(showNextPhoto());
    }

    _handleShowPrevPhoto = () => {
        store.dispatch(showPrevPhoto());
    }

    _handleShowPhoto = (event) => {
        const { value } = event.target;

        store.dispatch(showPhoto(parseInt(value)));
    }

    render () {
        const { gallery } = store.getState();
        const { url } = gallery.photos.find(( _ , photoIndex) => photoIndex === gallery.selectedPhotoIndex);

        const buttonActiveStyle1 = cx({
            [Styles.buttonActive]: gallery.selectedPhotoIndex === 0,
        });
        const buttonActiveStyle2 = cx({
            [Styles.buttonActive]: gallery.selectedPhotoIndex === 1,
        });
        const buttonActiveStyle3 = cx({
            [Styles.buttonActive]: gallery.selectedPhotoIndex === 2,
        });
        const buttonActiveStyle4 = cx({
            [Styles.buttonActive]: gallery.selectedPhotoIndex === 3,
        });

        return (
            <section className = { Styles.gallery }>
                <img src = { url } />
                <div>
                    <button onClick = { this._handleShowPrevPhoto }>←</button>
                    <button className = { buttonActiveStyle1 } value = { 0 } onClick = { this._handleShowPhoto }>1</button>
                    <button className = { buttonActiveStyle2 } value = { 1 } onClick = { this._handleShowPhoto }>2</button>
                    <button className = { buttonActiveStyle3 } value = { 2 } onClick = { this._handleShowPhoto }>3</button>
                    <button className = { buttonActiveStyle4 } value = { 3 } onClick = { this._handleShowPhoto }>4</button>
                    <button onClick = { this._handleShowNextPhoto } >→</button>
                </div>
            </section>
        );
    }
}
