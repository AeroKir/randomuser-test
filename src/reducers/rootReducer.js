import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import signInFormReducer from './signInFormReducer';
import contactsPageReducer from './contactsPageReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  signInFormReducer,
  contactsPageReducer,
});

export default createRootReducer;
