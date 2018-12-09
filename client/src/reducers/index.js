import { combineReducers } from 'redux';
import signUpReducer from './auth/signupReducer';
import signInReducer from './auth/signinReducer';
import gitCheatReducer from './gitCheats/gitCheatReducer';

export default combineReducers({
  signUpReducer,
  signInReducer,
  gitCheatReducer
});