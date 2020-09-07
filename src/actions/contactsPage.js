import createAction from './createAction';
import {
  SET_TILED_VIEW,
  SET_TABLE_VIEW,
  CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  CONTACTS_LOADING_FAIL,
} from '../constants/actionTypes';

export const setTiledView = createAction(SET_TILED_VIEW);
export const setTableView = createAction(SET_TABLE_VIEW);
export const contactsLoading = createAction(CONTACTS_LOADING);
export const getContactsSuccess = createAction(GET_CONTACTS_SUCCESS, 'contactsData');
export const contactsLoadingFail = createAction(CONTACTS_LOADING_FAIL);

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchContacts() {
  return (dispatch) => {
    dispatch(contactsLoading());

    const url = 'https://randomuser.me/api/?results=50';

    fetch(url)
      .then(handleErrors)
      .then((response) => response.json())
      .then((json) => {
        dispatch(getContactsSuccess(json.results));
        return json;
      })
      .catch(() => { });
  };
}
