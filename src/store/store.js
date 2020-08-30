import { createStore, compose, applyMiddleware } from 'redux';

const initialState = {};
const enhancers = [];
const composedEnhancers = compose(applyMiddleware(), ...enhancers);

const store = createStore(initialState, composedEnhancers);

export default store;
