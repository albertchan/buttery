import React from 'react';
import { Route } from 'react-router';
import * as containers from './containers';


// page components
const {
    App,
    Cinema,
    Cinemas,
    Movie,
    Movies
} = containers;

export default (
    <Route path="/" component={App}>
        <Route path="/cinemas" component={Cinemas} />
        <Route path="/cinema/:cinemaId" component={Cinema} />
        <Route path="/movies" component={Movies} />
        <Route path="/movie/:movieId" component={Movie} />
    </Route>
)