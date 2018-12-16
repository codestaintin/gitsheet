import actionTypes from '../../actions/actionTypes';

const initialState = {
  success: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SIGNIN_SUCCESSFUL:
    return {
      ...state,
      success: action.bool
    };
  case actionTypes.SIGNIN_UNSUCCESSFUL:
    return {
      ...state,
      success: action.bool
    };
  case actionTypes.LOG_OUT_SUCCESS:
    return {
      ...state,
      success: false
    };
  case actionTypes.SIGNUP_SUCCESSFUL:
    return {
      ...state,
      success: action.bool
    };
  case actionTypes.SIGNUP_UNSUCCESSFUL:
    return {
      ...state,
      success: action.bool
    };
  default:
    return state;
  }
};

export default authReducer;