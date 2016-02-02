import React from 'react';
import { render } from 'react-dom';
import i18n from 'i18next-client';
import * as localStore from 'store';
import * as path from 'path';
import Root from './components/Root';
import configureStore from './store/configureStore';


if (typeof window !== 'undefined') {

    // default locale
    var locale = 'en_us';

    // localStorage
    if (localStore.get('locale')) {
        locale = localStore.get('locale');
    } else {
        localStore.set('locale', locale);
    }

    // redux store
    let initialState = {
        currentLocale: locale,
        currentRegion: 1
    };
    const store = configureStore(initialState);

    // i18next is async, bootstrap React on callback
    i18n.sync.resStore = {};
    i18n.init({
        lng: 'en',
        fallbackLng: 'en',
        ns: {
            namespaces: ['common'],
            defaultNs: 'common'
        },
        resGetPath: path.join('/', 'assets/locales/__lng__/__ns__.json'),
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
