import jwtDecode from 'jwt-decode';

const decodeToken = token => jwtDecode(token);

const logout = () => {
  window.localStorage.removeItem('token');
};

const authorization = () => ({
  headers: {
    'x-access-token': window.localStorage.token
  }
});

// eslint-disable-next-line quotes
const baseUrl = `/api/v1/`;

export {
  logout,
  authorization,
  decodeToken,
  baseUrl
};