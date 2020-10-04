import initialState from '../store/initialState';
import {
  SET_TILED_VIEW,
  SET_TABLE_VIEW,
  CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  PAGINATE,
  FILTER_BY_NAME,
  FILTER_BY_GENDER,
  FILTER_BY_NATIONALITY,
  CLEAR_FILTERS_FORM,
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

    case FILTER_BY_NAME:
    {
      const serarchNameValue = action.payload.name;
      const collection = JSON.parse(localStorage.getItem('contactsCollection')) || [];

      const filteredByNameCollection = [];

      collection.map((contact) => {
        const { name } = contact;
        const nameValue = Object.values(name);

        nameValue.map((value) => {
          if (value.toLowerCase().includes(serarchNameValue.toLowerCase())) {
            filteredByNameCollection.push(contact);
            return filteredByNameCollection;
          }
          return [];
        });

        return filteredByNameCollection;
      });

      if (!serarchNameValue) {
        return {
          ...state,
          contactsCollection: collection,
        };
      }

      return {
        ...state,
        contactsCollection: filteredByNameCollection,
        isContactFilterClearDisabled: false,
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
        isContactFilterClearDisabled: false,
      };
    }

    case FILTER_BY_NATIONALITY:
    {
      const pickedNationalities = action.payload.nationalities;
      const collection = JSON.parse(localStorage.getItem('contactsCollection')) || [];

      const nationalitiesCollection = [];

      Object.keys(NATIONALITIES).map((nationality, item) => {
        const { name } = Object.values(NATIONALITIES)[item];

        if (isSomeAvailable(pickedNationalities, name)) {
          const filteredNationalities = collection.filter((contact) => contact.nat === nationality);
          filteredNationalities.forEach((element) => nationalitiesCollection.push(element));
          return nationalitiesCollection;
        }
        return nationalitiesCollection;
      });

      return {
        ...state,
        contactsCollection: nationalitiesCollection,
        isContactFilterClearDisabled: false,
      };
    }

    case CLEAR_FILTERS_FORM:
    {
      const collection = JSON.parse(localStorage.getItem('contactsCollection')) || [];

      return {
        ...state,
        contactsCollection: collection,
        isContactFilterClearDisabled: true,
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
