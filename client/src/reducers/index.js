import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import portfolio from './portfolio';
import transaction from './transaction';
import news from './news';

export default combineReducers({
  alert,
  auth,
  portfolio,
  transaction,
  news,
});
