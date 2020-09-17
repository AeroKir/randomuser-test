import initialState from '../store/initialState';
import {
  SET_TILED_VIEW,
  SET_TABLE_VIEW,
  CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  CONTACTS_LOADING_FAIL,
  PAGINATE,
  FILTER_BY_GENDER,
  FILTER_BY_NATIONALITY,
  LOGOUT,
} from '../constants/actionTypes';

import NATIONALITIES from '../constants/nationalities';
import isSomeAvailable from '../utils/checkAvailability';

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

      const collection = JSON.parse(localStorage.getItem('contactsCollection')) || [];

      localStorage.setItem('collectionLength', JSON.stringify(collection.length));

      const males = JSON.parse(localStorage.getItem('contactsCollection')) || [];
      const malesAmount = males.filter((contact) => contact.gender === 'male').length;
      localStorage.setItem('malesAmount', JSON.stringify(malesAmount));

      const females = JSON.parse(localStorage.getItem('contactsCollection')) || [];
      const femalesAmount = females.filter((contact) => contact.gender === 'female').length;
      localStorage.setItem('femalesAmount', JSON.stringify(femalesAmount));

      const indeterminate = JSON.parse(localStorage.getItem('contactsCollection')) || [];
      const indeterminateAmount = indeterminate.filter((contact) => contact.gender === 'indeterminate');
      localStorage.setItem('indeterminateAmount', JSON.stringify(indeterminateAmount));

      return {
        ...state,
        contactsCollection: collection,
        collectionLength: JSON.parse(localStorage.getItem('collectionLength')),
        males: JSON.parse(localStorage.getItem('malesAmount')),
        females: JSON.parse(localStorage.getItem('femalesAmount')),
        indeterminate: JSON.parse(localStorage.getItem('indeterminateAmount')),
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

    case FILTER_BY_GENDER:
    {
      const collection = JSON.parse(localStorage.getItem('contactsCollection')) || [];

      if (!action.payload.gender) {
        return {
          ...state,
          contactsCollection: collection,
        };
      }
      return {
        ...state,
        contactsCollection: collection.filter((contact) => contact.gender === action.payload.gender),
      };
    }

    case FILTER_BY_NATIONALITY:
    {
      const checkedNationalities = action.payload.nationalities;
      const collection = JSON.parse(localStorage.getItem('contactsCollection')) || [];

      const nationalitiesCollection = [];

      Object.keys(NATIONALITIES).map((nationality, item) => {
        const { name } = Object.values(NATIONALITIES)[item];

        if (isSomeAvailable(checkedNationalities, name)) {
          const filteredNationalities = collection.filter((contact) => contact.nat === nationality);
          filteredNationalities.forEach((element) => nationalitiesCollection.push(element));
          return nationalitiesCollection;
        }
        return nationalitiesCollection;
      });

      return {
        ...state,
        contactsCollection: nationalitiesCollection,
      };
    }

    case LOGOUT:
    {
      return {
        isTableView: true,
        isTiledView: false,
        isLoading: false,
        contactsCollection: [],
        collectionLength: 0,
        males: 0,
        females: 0,
        indeterminate: 0,
        contactsPerPage: 10,
        defaultCurrentPage: 1,
        currentPage: 1,
        isContactProfileLoading: false,
      };
    }

    default:
      return state;
  }
}

export default contactsPageReducer;
