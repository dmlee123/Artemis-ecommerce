import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
//by default storage below will use local storage
import storage from 'redux-persist/lib/storage';
// instead of of the middleware we created below, we are using redux-logger
// import { loggerMiddleware } from './middleware/logger';
import logger from 'redux-logger';
// import thunk from 'redux-thunk'

const persistConfig = {
	// root means to persist the whole thing
	key: 'root',
	// storage means local storage
	storage,
	// which info we want to blacklist
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// making sure this only happens in development
// syntax filters out anything where its not true
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);


const composedEnhancers = compose(applyMiddleware(...middleWares));

//wrap provider with store as a prop around the whole app
export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

//use this below in index.js
export const persistor = persistStore(store);
