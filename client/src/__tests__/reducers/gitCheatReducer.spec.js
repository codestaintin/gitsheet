import gitCheatReducer from '../../reducers/gitCheats/gitCheatReducer';
import actionTypes from '../../actions/actionTypes';

const {
  LOAD_CHEATS_SUCCESS,
  LOAD_CHEATS_FAILURE,
  IS_LOADING
} = actionTypes;

describe('Git Cheat Reducer tests', () => {
  const initialState = {
    gitCheats: [],
    isLoading: false,
    errors: null
  };
  it('should return the initial statte', () => {
    expect(gitCheatReducer(undefined,
      { gitCheats: [], isLoading: false, errors: null }))
      .toEqual(initialState);
  });
  it('should get a response of type LOAD_CHEATS_SUCCESS', () => {
    const action = {
      type: LOAD_CHEATS_SUCCESS
    };
    expect(gitCheatReducer(initialState, action))
      .toEqual({
        errors: null,
        gitCheats: undefined,
        isLoading: false
      });
  });
  it('should get a response of type LOAD_CHEATS_FAILURE', () => {
    const action = {
      type: LOAD_CHEATS_FAILURE
    };
    expect(gitCheatReducer(initialState, action))
      .toEqual({
        errors: undefined,
        gitCheats: [],
        isLoading: false
      });
  });
  it('should get a response of type IS_LOADING', () => {
    const action = {
      type: IS_LOADING
    };
    expect(gitCheatReducer(initialState, action))
      .toEqual({
        errors: null,
        gitCheats: [],
        isLoading: undefined
      });
  });
});