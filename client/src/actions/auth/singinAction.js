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
      if (decodeToken(token)) {
        window.localStorage.setItem('token', token);
      }
      dispatch(signinSuccess(true));
      toastr.success(res.data.message);
      toastr.clear();
    })
    .catch(error => {
      if (error) {
        dispatch(signinFailure(true));
        throw (error);
      }
    });
};

export const logOut = () => dispatch => {
  dispatch({ type: actionTypes.LOG_OUT_SUCCESS });
  logout();
};

export default signIn;