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
      const validToken = Object.keys(decodeToken(token)).includes('_id');
      if (validToken) {
        window.localStorage.setItem('token', token);
      }
      dispatch(signUpSuccess(validToken));
      toastr.success(res.data.message);
      toastr.clear();
    })
    .catch(error => {
      if (error) {
        dispatch(signUpFailure(true));
        toastr.error('An error occured during this operation');
        toastr.clear();
      }
    });
};

export default signUp;
