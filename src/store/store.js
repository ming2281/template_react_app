import {applyMiddleware, createStore, compose} from "redux";

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {reducer} from '../reducers/reducers'

/**
 * 创建全局的store对象, 让每个组件都能看见store对象
 */
function createMyStore() {
    /// 获取环境变量
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
