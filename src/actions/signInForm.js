import createAction from './createAction';
import { SHOW_SIGN_IN_FORM, HIDE_SIGN_IN_FORM } from '../constants/actionTypes';

export const showSignInForm = createAction(SHOW_SIGN_IN_FORM);
export const hideSignInForm = createAction(HIDE_SIGN_IN_FORM);
