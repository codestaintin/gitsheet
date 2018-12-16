import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from '../../actions/actionTypes';
import signIn, { logOut } from '../../actions/auth/singinAction';
import token from '../__mocks__/mockData';

const {
  SIGNIN_SUCCESSFUL,
  SIGNIN_UNSUCCESSFUL,
  LOG_OUT_SUCCESS
} = actionTypes;

const mockStore = configureStore([thunk]);
window.localStorage = localStorage;

describe('Sing in action test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch SIGNIN_UNSUCCESSFUL', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: SIGNIN_UNSUCCESSFUL,
        bool: true
      }
    ];
    store.dispatch(signIn())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch SIGNIN_SUCCESSFUL', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: token
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: SIGNIN_SUCCESSFUL,
        bool: true
      }
    ];
    store.dispatch(signIn())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch LOG_OUT_SUCCESS', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: LOG_OUT_SUCCESS
      }
    ];
    store.dispatch(logOut());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});