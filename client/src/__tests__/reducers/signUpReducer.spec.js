import signUpReducer from '../../reducers/auth/signupReducer';
import actionTypes from '../../actions/actionTypes';

describe('SignUp Reducer tests', () => {
  const initialState = {
    success: false,
    failure: false
  };
  it('should return the initial state', () => {
    expect(signUpReducer(undefined, { success: false, failure: false }))
      .toEqual(initialState);
  });
  it('should get a response of SIGNUP_SUCCESSFUL', () => {
    const action = {
      type: actionTypes.SIGNUP_SUCCESSFUL
    };
    expect(signUpReducer(initialState, action))
      .toEqual({
        failure: false
      });
  });
  it('should get a response of SIGNUP_UNSUCCESSFUL', () => {
    const action = {
      type: actionTypes.SIGNUP_UNSUCCESSFUL
    };
    expect(signUpReducer(initialState, action))
      .toEqual({
        success: false
      });
  });
});