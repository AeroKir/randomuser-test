import initialState from '../store/initialState';
import {
  SHOW_SIGN_IN_FORM,
  HIDE_SIGN_IN_FORM,
  GET_USER, GET_USER_AUTH_DATA,
  SWITCH_TO_USER_PROFILE,
} from '../constants/actionTypes';

function contactsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SIGN_IN_FORM:
      {
        return {
          ...state,
          user: {
            isSignInFormShowed: true,
          },
        };
      }

    case HIDE_SIGN_IN_FORM:
      {
        console.log(state)
        return {
          ...state,
          user: {
            isSignInFormShowed: false,
          },
        };
      }

    case SWITCH_TO_USER_PROFILE:
      {
        console.log(state)
        return {
          ...state,
          user: {
            isSignInFormShowed: false,
            isUserSignedIn: true,
          },
        };
      }

    case GET_USER_AUTH_DATA:
      {
        console.log(action.payload);
        return { ...state, userEmail: action.payload.email, userPassword: action.payload.password }
      }

    case GET_USER:
      {
        console.log(action.payload.userData);
        console.log(state)
        return {
          ...state,
          // user: {
          //   isSignInFormShowed: false,
          //   isUserSignedIn: true
          // },
          // userEmail: '',
          // userPassword: '',
          fetchedUser: action.payload.userData
          // gettedUser: action.payload
        }
        console.log(state);
      }


    default:
      console.log(state);
      return state;
  }
}

export default contactsPageReducer;
