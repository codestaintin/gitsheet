import actionTypes from '../../actions/actionTypes';

const initialState = {
  success: false,
  failure: false
};

const signinReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SIGNIN_SUCCESSFUL:
    return {
      ...state,
      success: action.bool
    };
  case actionTypes.SIGNIN_UNSUCCESSFUL:
    return {
      ...state,
      failure: action.bool
    };
  case actionTypes.LOG_OUT_SUCCESS:
    return {
      ...state,
      success: false
    };
  default:
    return state;
  }
};

export default signinReducer;