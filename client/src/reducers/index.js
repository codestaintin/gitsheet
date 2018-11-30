import { combineReducers } from 'redux';
import signUpReducer from './auth/signupReducer';
import signInReducer from './auth/signinReducer';

export default combineReducers({
  signUpReducer,
  signInReducer
});