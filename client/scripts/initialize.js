import React from 'react';
import { render } from 'react-dom';
//import i18n from 'i18next-client';
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import * as localStore from 'store';
import * as path from 'path';
import Root from './containers/Root';
import configureStore from './store/configureStore';


if (typeof window !== 'undefined') {

    // default locale
    const mapLocale = {
        "en-US": "en_us",
        "zh-HK": "zh_hk"
    };
    let locale = 'en-US';

    // localStorage
    if (localStore.get('locale')) {
        locale = localStore.get('locale');
    } else {
        localStore.set('locale', locale);
    }

    // redux store
    let initialState = {
        currentLocale: mapLocale[locale],
        currentRegion: 1
    };
    const store = configureStore(initialState);

    // i18next options
    const i18nextOptions = {
        lng: locale,
        fallbackLng: 'en-US',
        load: ['en-US', 'zh-HK'],
        whitelist: ['en-US', 'zh-HK'],
        ns: 'common',
        defaultNS: 'common',
        backend: {
            crossDomain: false,
            loadPath: '/assets/locales/{{lng}}/{{ns}}.json'
        },
        preload: [locale]
    };

    // i18next is async, bootstrap React on callback
    i18next
        .use(XHR)
        .init(i18nextOptions, (err, t) => {
            render(
                <Root store={store}/>,
                document.getElementById('app')
            );
        }
    );

}
