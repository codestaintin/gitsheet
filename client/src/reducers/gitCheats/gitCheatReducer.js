import actionTypes from '../../actions/actionTypes';

const initialState = {
  gitCheats: [],
  isLoading: false,
  errors: null
};

const gitCheatsReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOAD_CHEATS_SUCCESS:
    return {
      ...state,
      gitCheats: action.cheatsData,
    };
  case actionTypes.LOAD_CHEATS_FAILURE:
    return {
      ...state,
      errors: action.error
    };
  case actionTypes.IS_LOADING:
    return {
      ...state,
      isLoading: action.bool
    };
  default:
    return state;
  }
};

export default gitCheatsReducer;