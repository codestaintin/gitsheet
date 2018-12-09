import axios from 'axios';
import actionTypes from '../actionTypes';

const loadCheatsSuccess = cheatsData => ({
  type: actionTypes.LOAD_CHEATS_SUCCESS,
  cheatsData
});

const loadCheatsFailure = error => ({
  type: actionTypes.LOAD_CHEATS_FAILURE,
  error
});

const isLoading = bool => ({
  type: actionTypes.IS_LOADING,
  bool
});

const loadCheatsAction = () => dispatch => {
  dispatch(isLoading(true));
  return axios.get('api/v1/category')
    .then((res) => {
      dispatch(loadCheatsSuccess(res.data));
      dispatch(isLoading(false));
    })
    .catch(error => {
      dispatch(loadCheatsFailure(error));
    });
};

export default loadCheatsAction;
