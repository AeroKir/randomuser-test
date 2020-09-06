import initialState from '../store/initialState';
import { SET_TILED_VIEW, SET_TABLE_VIEW } from '../constants/actionTypes';

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

    default:
      return state;
  }
}

export default contactsPageReducer;
