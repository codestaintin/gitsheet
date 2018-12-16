import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from '../../actions/actionTypes';
import signUp from '../../actions/auth/signupAction';
import token from '../__mocks__/mockData';

const {
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL,
  SIGNIN_SUCCESSFUL
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
        type: SIGNUP_SUCCESSFUL,
        bool: true
      }
    ];
    store.dispatch(signUp())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch SIGNUP_UNSUCCESSFUL', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        error: {}
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: SIGNUP_UNSUCCESSFUL,
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