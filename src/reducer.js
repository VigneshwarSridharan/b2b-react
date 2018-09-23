import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import home from './reducers/home';
import { routerReducer } from 'react-router-redux';
import { localizeReducer as locale } from 'react-localize-redux';

export default combineReducers({
  auth,
  common,
  home,
  router: routerReducer,
  locale
});
