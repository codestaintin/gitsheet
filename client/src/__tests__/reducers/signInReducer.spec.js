import signInReducer from '../../reducers/auth/signinReducer';
import actionTypes from '../../actions/actionTypes';

const {
  SIGNIN_SUCCESSFUL,
  SIGNIN_UNSUCCESSFUL,
  LOG_OUT_SUCCESS
} = actionTypes;

describe('SignIn reducer tests', () => {
  const initialState = {
    success: false,
    failure: false
  };
  it('should return the initial state', () => {
    expect(signInReducer(undefined, { success: false, failure: false }))
      .toEqual(initialState);
  });
  it('should get a response SIGNIN_SUCCESSFUL', () => {
    const action = {
      type: SIGNIN_SUCCESSFUL
    };
    expect(signInReducer(initialState, action))
      .toEqual({
        failure: false
      });
  });
  it('should get a response of SIGNIN_UNSUCCESSFUL', () => {
    const action = {
      type: SIGNIN_UNSUCCESSFUL
    };
    expect(signInReducer(initialState, action))
      .toEqual({
        success: false
      });
  });
  it('should get a response of LOGOUT_SUCCESS', () => {
    const action = {
      type: LOG_OUT_SUCCESS
    };
    expect(signInReducer(initialState, action))
      .toEqual({
        failure: false,
        success: false
      });
  });
});