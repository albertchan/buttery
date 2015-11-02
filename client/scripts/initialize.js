import React from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { Router, Route, History } from 'react-router';
import i18n from 'i18next-client';

import App from './components/App';
import Cinema from './routes/Cinema';


// session history in browsers
const history = createHistory();

// recursive directory loop
const rootRoute = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            require('./routes/Cinema'),
            require('./routes/Movie')
        ]
    }]
};

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

        if (typeof history.setup === "function") {
            history.setup();
        }

        render(
            // <Router history={history}>
            //     <Route path="/" component={App}>
            //         <Route path="cinema" component={Cinema} />
            //     </Route>
            // </Router>,
            <Router history={history} routes={rootRoute} />,
            document.getElementById('app')
        );

    });

}
