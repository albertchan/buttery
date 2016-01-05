import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { combineReducers, compose, createStore, } from 'redux';
import { Provider } from 'react-redux';
import { ReduxRouter, reduxReactRouter, routerStateReducer } from 'redux-router';
import { createHistory } from 'history';
import i18n from 'i18next-client';
import * as localStore from 'store';
import * as path from 'path';
import Root from './components/Root';
import configureStore from './store/configureStore';


const store = configureStore();

if (typeof window !== 'undefined') {

    // default locale
    var locale = 'en';

    // localStorage
    if (localStore.get('locale')) {
        locale = localStore.get('locale');
    } else {
        localStore.set('locale', locale);
    }

    // i18next is async, bootstrap React on callback
    i18n.sync.resStore = {};
    i18n.init({
        lng: 'en',
        fallbackLng: 'en',
        ns: {
            namespaces: ['common'],
            defaultNs: 'common'
        },
        resGetPath: path.join('/', 'locales/__lng__/__ns__.json'),
        supportedLngs: ['en', 'zh-HK'],
        preload: [locale]
        //preload: ['en', 'zh-HK']
        // useLocalStorage: true,
        // localStorageExpirationTime: 86400000 // in ms, default 1 week
    }, function(err, t) {

        render(
            <Root store={store} />,
            document.getElementById('app')
        );

    });

}
