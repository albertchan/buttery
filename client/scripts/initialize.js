import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, History } from 'react-router';
import { Route } from 'react-router';
import { combineReducers, compose, createStore, } from 'redux';
import { Provider } from 'react-redux';
import { ReduxRouter, reduxReactRouter, routerStateReducer } from 'redux-router';
import { createHistory } from 'history';
import i18n from 'i18next-client';

import App from './components/App';
import * as pages from './components/pages';


// page components
const {
    Cinema,
    Movie
} = pages;

// redux-router magic
const reducer = combineReducers({
    router: routerStateReducer
});

const store = compose(
    reduxReactRouter({ createHistory })
)(createStore)(reducer);

if (typeof window !== 'undefined') {

    // i18next is async, bootstrap React on callback
    i18n.init({
        lng: 'en',
        fallbackLng: 'en',
        ns: {
            namespaces: ['common'],
            defaultNs: 'common'
        },
        resSetPath: './locales/__lng__/__ns__.json',
        supportedLngs: ['en', 'zh-HK'],
        preload: ['en', 'zh-HK']
        // useLocalStorage: true,
        // localStorageExpirationTime: 86400000 // in ms, default 1 week
    }, function(err, t) {

        // if (typeof history.setup === "function") {
        //     history.setup();
        // }

        render(
            // <Router history={history}>
            //     <Route path="/" component={App}>
            //         <Route path="cinema" component={Cinema} />
            //     </Route>
            // </Router>,
            // <Router history={history} routes={rootRoute} />,

            <Provider store={store}>
                <ReduxRouter>
                    <Route path="/" component={App}>
                        <Route path="cinema" component={Cinema} />
                        <Route path="movie" component={Movie} />
                    </Route>
                </ReduxRouter>
            </Provider>,
            document.getElementById('app')
        );

    });

}
