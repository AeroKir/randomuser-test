import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

const initialState = {};
const enhancers = [];
const composedEnhancers = compose(applyMiddleware(), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
