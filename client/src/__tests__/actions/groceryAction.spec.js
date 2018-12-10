import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from '../../actions/actionTypes';
import loadCheatsAction from '../../actions/gitCheat/gitCheatActions';

const {
  LOAD_CHEATS_SUCCESS,
  LOAD_CHEATS_FAILURE,
  IS_LOADING
} = actionTypes;

const mockStore = configureStore([thunk]);

describe('Cheats action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch LOAD_CHEATS_SUCCESS', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: IS_LOADING,
        bool: true
      },
      {
        type: LOAD_CHEATS_SUCCESS
      },
      {
        type: IS_LOADING,
        bool: false
      }
    ];
    store.dispatch(loadCheatsAction())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});