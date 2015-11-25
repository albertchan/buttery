import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import * as pages from './components/pages';


// page components
const {
    Cinema,
    Cinemas,
    Movie
} = pages;

export default (
    <Route path="/" component={App}>
        <Route path="/cinemas" component={Cinemas} />
        <Route path="/cinema/:cinemaId" component={Cinema} />
        <Route path="/movie" component={Movie} />
    </Route>
)