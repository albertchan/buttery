import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router';
import { combineReducers, compose, createStore, } from 'redux';
import { ReduxRouter, reduxReactRouter, routerStateReducer, pushState } from 'redux-router';
import { Provider, connect } from 'react-redux';
import { createHistory } from 'history';
import App from './App';


export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <ReduxRouter />
            </Provider>
        );
    }
}