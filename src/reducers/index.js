import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import {layout} from './layout';

export default combineReducers({
  router,
  layout
});