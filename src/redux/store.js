import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import rootReducer from './rootReducer';

// configuring the store
const middlewares = [Logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
