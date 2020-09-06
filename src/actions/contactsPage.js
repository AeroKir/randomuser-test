import createAction from './createAction';
import { SET_TILED_VIEW, SET_TABLE_VIEW } from '../constants/actionTypes';

export const setTiledView = createAction(SET_TILED_VIEW);
export const setTableView = createAction(SET_TABLE_VIEW);
