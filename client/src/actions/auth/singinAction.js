import axios from 'axios';
import toastr from 'toastr';
import actionTypes from '../actionTypes';
import { decodeToken, logout } from '../../../../shared/utils/helpers';

const signinSuccess = (bool) => ({
  type: actionTypes.SIGNIN_SUCCESSFUL,
  bool
});

const signinFailure = (bool) => ({
  type: actionTypes.SIGNIN_UNSUCCESSFUL,
  bool
});


const signIn = (user) => dispatch => {
  return axios.post('/api/v1/users/signin', user)
    .then((res) => {
      const { token } = res.data;
      const validToken = Object.keys(decodeToken(token)).includes('_id');
      if (validToken) {
        window.localStorage.setItem('token', token);
      }
      dispatch(signinSuccess(validToken));
      toastr.success(res.data.message);
      toastr.clear();
    })
    .catch(error => {
      if (error) {
        dispatch(signinFailure(true));
        toastr.error('Invalid Credentials');
        toastr.clear();
      }
    });
};

export const logOut = () => dispatch => {
  dispatch({ type: actionTypes.LOG_OUT_SUCCESS });
  logout();
};

export default signIn;