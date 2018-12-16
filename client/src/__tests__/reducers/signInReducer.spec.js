import authReducer from '../../reducers/auth/authReducer';
import actionTypes from '../../actions/actionTypes';

const {
  SIGNIN_SUCCESSFUL,
  SIGNIN_UNSUCCESSFUL,
  LOG_OUT_SUCCESS
} = actionTypes;

describe('Auth reducer tests', () => {
  const initialState = {
    success: false
  };
  it('should return the initial state', () => {
    expect(authReducer(undefined, { success: false }))
      .toEqual(initialState);
  });
  it('should get a response SIGNIN_SUCCESSFUL', () => {
    const action = {
      type: SIGNIN_SUCCESSFUL,
      success: undefined
    };
    expect(authReducer(initialState, action))
      .toEqual({
        success: undefined
      });
  });
  it('should get a response of SIGNIN_UNSUCCESSFUL', () => {
    const action = {
      type: SIGNIN_UNSUCCESSFUL
    };
    expect(authReducer(initialState, action))
      .toEqual({
        success: undefined
      });
  });
  it('should get a response of LOGOUT_SUCCESS', () => {
    const action = {
      type: LOG_OUT_SUCCESS
    };
    expect(authReducer(initialState, action))
      .toEqual({
        success: false
      });
  });
  it('should get a response of SIGNUP_SUCCESSFUL', () => {
    const action = {
      type: actionTypes.SIGNUP_SUCCESSFUL
    };
    expect(authReducer(initialState, action))
      .toEqual({
        success: undefined
      });
  });
  it('should get a response of SIGNUP_UNSUCCESSFUL', () => {
    const action = {
      type: actionTypes.SIGNUP_UNSUCCESSFUL
    };
    expect(authReducer(initialState, action))
      .toEqual({
        success: undefined
      });
  });
});