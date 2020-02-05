import {applyMiddleware, createStore, compose} from "redux";

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {reducer} from '../reducers/reducers'

function createMyStore() {
    const env = 'dev';

    if (env === 'dev') {
        return createStore(reducer,
            compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__({}))
        )
    } else {
        return createStore(reducer, applyMiddleware(thunk))
    }
}

export const STORE = createMyStore();
