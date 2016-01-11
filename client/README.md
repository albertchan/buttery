# Buttery client

This directory contains the front end React application for the project.


## Routing

All front end routes are provided `/scripts/routes.js`. The `react-router` and `redux-router` frameworks are used for
routing.


## Flux Architecture

Buttery uses `react-redux`, the React binding for `redux`, as the front end state container and action dispatcher.


## Page Components

The "page" components of the application are used to render the views of the various routes. These components are 
located in `/scripts/components/pages`. If you add a new "page" component, you'll need to register it in 
`scripts/components/pages/index.js` before they can be discovered.
