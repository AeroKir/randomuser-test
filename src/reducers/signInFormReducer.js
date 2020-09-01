import initialState from '../store/initialState';
import { SHOW_SIGN_IN_FORM, HIDE_SIGN_IN_FORM } from '../constants/actionTypes';

function signInFormReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SIGN_IN_FORM:
      console.log(state);
      return {
        user: {
          isSignInFormShowed: true,
        },
      };

    case HIDE_SIGN_IN_FORM:
      console.log(state);
      return {
        user: {
          isSignInFormShowed: false,
        },
      };

    default:
      console.log(state);
      return state;
  }
}

export default signInFormReducer;
