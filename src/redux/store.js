import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

// configuring the store
const middlewares = [Logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
