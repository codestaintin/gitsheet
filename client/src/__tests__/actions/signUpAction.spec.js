import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from '../../actions/actionTypes';
import signUp from '../../actions/auth/signupActions';
import token from '../__mocks__/mockData';

const {
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL
} = actionTypes;

const mockStore = configureStore([thunk]);
window.localStorage = localStorage;

describe('Sign up action test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch SIGNUP_SUCCESSFUL', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: token
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: actionTypes.SIGNUP_SUCCESSFUL,
        bool: true
      }
    ];
    store.dispatch(signUp())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});