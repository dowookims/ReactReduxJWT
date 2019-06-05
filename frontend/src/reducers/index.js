import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducers';
export default combineReducers({
  errors: errorReducer,
  auth: authReducer
});