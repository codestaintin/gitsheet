import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import gitCheatReducer from './gitCheats/gitCheatReducer';

export default combineReducers({
  authReducer,
  gitCheatReducer
});