import createAction from './createAction';
import {
  SHOW_SIGN_IN_FORM, HIDE_SIGN_IN_FORM, GET_USER, GET_USER_AUTH_DATA,
} from '../constants/actionTypes';

export const showSignInForm = createAction(SHOW_SIGN_IN_FORM);
export const hideSignInForm = createAction(HIDE_SIGN_IN_FORM);

export function getUser(userData) {
  return {
    type: GET_USER,
    payload: { userData },
  };
}

export function getUserAuthData(email, password) {
  return {
    type: GET_USER_AUTH_DATA,
    payload: { email, password },
  };
}

export function fetchUser() {
  return (dispatch, getState) => {
    const state = getState();

    const { form: { signInForm: { values: { userEmail, userPassword } } } } = state;

    dispatch(getUserAuthData(userEmail, userPassword));

    const url = `https://randomuser.me/api/?seed=${userEmail}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const userData = json;
        return userData;
      })
      .then((userData) => dispatch(getUser(userData)));
  };
}
