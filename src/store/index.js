import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web

const logger = createLogger({});

const initState = {};

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger) // DEV middlewares
}

const composeEnhancers =
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
  : compose

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const persistorConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const reducer = persistReducer(persistorConfig, rootReducer);

export const store = createStore(reducer, initState, enhancer);
export const persistor = persistStore(store);
