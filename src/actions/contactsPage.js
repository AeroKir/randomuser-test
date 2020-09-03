import createAction from './createAction';
import { SET_TILED_VIEW, SET_TABULAR_VIEW } from '../constants/actionTypes';

export const setTiledView = createAction(SET_TILED_VIEW);
export const setTabularView = createAction(SET_TABULAR_VIEW);
