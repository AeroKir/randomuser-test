import initialState from '../store/initialState';
import {
  SHOW_SIGN_IN_FORM,
  HIDE_SIGN_IN_FORM,
  GET_USER, GET_USER_AUTH_DATA,
  SWITCH_TO_USER_PROFILE,
  USER_DATA_LOADING,
  LOGOUT,
} from '../constants/actionTypes';

function preloadedStateReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SIGN_IN_FORM:
    {
      return {
        ...state,
        isSignInFormShowed: true,
      };
    }

    case HIDE_SIGN_IN_FORM:
    {
      return {
        ...state,
        isSignInFormShowed: false,
      };
    }

    case SWITCH_TO_USER_PROFILE:
    {
      return {
        ...state,
        isSignInFormShowed: false,
        isUserSignedIn: true,
      };
    }

    case USER_DATA_LOADING:
    {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_USER_AUTH_DATA:
    {
      return { ...state, userEmail: action.payload.email, userPassword: action.payload.password };
    }

    case GET_USER:
    {
      localStorage.setItem('user', JSON.stringify(action.payload.userData));

      return {
        ...state,
        isSignInFormShowed: false,
        isUserSignedIn: true,
        user: action.payload.userData,
        isLoading: false,

        // isUserDataLoading: false,
      };

      // return { ...state, fetchedUser: action.payload.userData };
    }

    case LOGOUT:
    {
      localStorage.removeItem('user');

      return {
        isSignInFormShowed: false,
        isUserSignedIn: !!localStorage.getItem('user'),
        user: JSON.parse(localStorage.getItem('user')) || {},
        userEmail: '',
        userPassword: '',
      };
    }

    default:
      return state;
  }
}

export default preloadedStateReducer;
