import { push } from 'connected-react-router';

import createAction from './createAction';
import {
  SET_TILED_VIEW,
  SET_TABLE_VIEW,
  CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  CONTACTS_LOADING_FAIL,
  PAGINATE,
  FILTER_BY_GENDER,
  FILTER_BY_NATIONALITY,
} from '../constants/actionTypes';

export const setTiledView = createAction(SET_TILED_VIEW);
export const setTableView = createAction(SET_TABLE_VIEW);
export const contactsLoading = createAction(CONTACTS_LOADING);
export const getContactsSuccess = createAction(GET_CONTACTS_SUCCESS, 'contactsData');
export const contactsLoadingFail = createAction(CONTACTS_LOADING_FAIL);
export const paginate = createAction(PAGINATE, 'currentPageNumber', 'pageSize');
export const filterByGender = createAction(FILTER_BY_GENDER, 'gender');
export const filterByNationality = createAction(FILTER_BY_NATIONALITY, 'nationalities');

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchContacts() {
  return (dispatch) => {
    const numberOfContacts = JSON.parse(localStorage.getItem('numberOfContacts'));

    dispatch(contactsLoading());

    const urlContacts = `https://randomuser.me/api/?results=${numberOfContacts}`;

    fetch(urlContacts)
      .then(handleErrors)
      .then((response) => response.json())
      .then((json) => {
        dispatch(getContactsSuccess(json.results));
        return json;
      })
      .catch(() => { });
  };
}

export function backToContacts() {
  return (dispatch) => {
    dispatch(push('/contacts'));
  };
}
