import initialState from '../store/initialState';
import generateRandomIntegerInRange from '../utils/generateRandomInteger';
import {
  SHOW_SIGN_IN_FORM,
  HIDE_SIGN_IN_FORM,
  GET_USER, GET_USER_AUTH_DATA,
  SWITCH_TO_USER_PROFILE,
  USER_DATA_LOADING,
  USER_DATA_LOADING_FAIL,
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
      localStorage.setItem('numberOfContacts', JSON.stringify(generateRandomIntegerInRange(1, 200)));
      return {
        ...state,
        isLoading: true,
        isLoadingFail: false,
      };
    }

    case USER_DATA_LOADING_FAIL:
    {
      return {
        ...state,
        isLoading: false,
        isLoadingFail: true,
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
        isLoadingFail: false,
      };
    }

    case LOGOUT:
    {
      localStorage.clear();

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
