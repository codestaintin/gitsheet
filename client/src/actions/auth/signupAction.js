import axios from 'axios';
import toastr from 'toastr';
import actionTypes from '../actionTypes';
import { decodeToken } from '../../../../shared/utils/helpers';

const signUpSuccess = (bool) => ({
  type: actionTypes.SIGNUP_SUCCESSFUL,
  bool
});

const signUpFailure = (bool) => ({
  type: actionTypes.SIGNUP_UNSUCCESSFUL,
  bool
});

const signUp = (user) => dispatch => {
  return axios.post('/api/v1/users/signup', user)
    .then((res) => {
      const { token } = res.data;
      if (decodeToken(token)) {
        window.localStorage.setItem('token', token);
      }
      dispatch(signUpSuccess(true));
      toastr.success(res.data.message);
      toastr.clear();
    })
    .catch(error => {
      if (error) {
        dispatch(signUpFailure(true));
        throw (error);
      }
    });
};

export default signUp;
