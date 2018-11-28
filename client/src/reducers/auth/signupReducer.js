import actionTypes from '../../actions/actionTypes';

const initialState = {
  success: false,
  failure: false
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SIGNUP_SUCCESSFUL:
    return {
      ...state,
      success: action.bool
    };
  case actionTypes.SIGNUP_UNSUCCESSFUL:
    return {
      ...state,
      failure: action.bool
    };
  default:
    return state;
  }
};

export default signUpReducer;