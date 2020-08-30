import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers/rootReducer';

const initialState = {};
const enhancers = [];

export const history = createBrowserHistory();

const composedEnhancers = compose(applyMiddleware(routerMiddleware(history)), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
