import { push } from 'connected-react-router';

import createAction from './createAction';
import {
  SHOW_SIGN_IN_FORM,
  HIDE_SIGN_IN_FORM,
  GET_USER, GET_USER_AUTH_DATA,
  SWITCH_TO_USER_PROFILE,
  USER_DATA_LOADING,
} from '../constants/actionTypes';

export const showSignInForm = createAction(SHOW_SIGN_IN_FORM);
export const hideSignInForm = createAction(HIDE_SIGN_IN_FORM);
export const switchToUserProfile = createAction(SWITCH_TO_USER_PROFILE);
export const userDataLoading = createAction(USER_DATA_LOADING);

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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchUser() {
  return (dispatch, getState) => {
    const state = getState();

    const { form: { signInForm: { values: { userEmail, userPassword } } } } = state;

    dispatch(userDataLoading());
    dispatch(getUserAuthData(userEmail, userPassword));

    const url = `https://randomuser.me/api/?seed=${userEmail}`;

    fetch(url)
      .then(handleErrors)
      .then((response) => response.json())
      .then((json) => {
        dispatch(getUser(json.results));
        return json;
      })
      .then(() => {
        dispatch(push('/profile'));
      })
      .catch(() => { });
  };
}
