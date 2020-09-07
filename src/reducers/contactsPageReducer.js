import initialState from '../store/initialState';
import {
  SET_TILED_VIEW,
  SET_TABLE_VIEW,
  CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  CONTACTS_LOADING_FAIL,
  PAGINATE,
} from '../constants/actionTypes';

function contactsPageReducer(state = initialState.contacts, action) {
  switch (action.type) {
    case SET_TILED_VIEW:
    {
      return {
        ...state,
        isTiledView: true,
        isTableView: false,
      };
    }

    case SET_TABLE_VIEW:
    {
      return {
        ...state,
        isTiledView: false,
        isTableView: true,
      };
    }

    case CONTACTS_LOADING:
    {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_CONTACTS_SUCCESS:
    {
      localStorage.setItem('contactsCollection', JSON.stringify(action.payload.contactsData));

      return {
        ...state,
        contactsCollection: action.payload.contactsData,
        isLoading: false,
      };
    }

    case PAGINATE:
    {
      return {
        ...state,
        currentPage: action.payload.currentPageNumber,
        contactsPerPage: action.payload.pageSize,
      };
    }

    default:
      return state;
  }
}

export default contactsPageReducer;
