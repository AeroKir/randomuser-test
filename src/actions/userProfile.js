import { push } from 'connected-react-router';

import createAction from './createAction';
import { LOGOUT } from '../constants/actionTypes';

export const logout = createAction(LOGOUT);

export function goHome() {
  return (dispatch) => {
    dispatch(push('/'));
  };
}
