import { applyMiddleware, compose, createStore } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import rootReducer from '../reducers';
import routes from '../routes';


// const createStoreWithMiddleware = compose(
const finalCreateStore = compose(
    applyMiddleware(
        thunk, // lets us dispatch() functions
        api
    ),
    reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    return store;
}