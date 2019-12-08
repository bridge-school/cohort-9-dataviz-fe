import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { COHORTS } from './actions.type';
import {
  setCohortsData,
  setCohortLoading,
  setCohortError,
  fetchCohortsThunk
} from './cohorts.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('Cohorts actions', () => {
  it('should create an action to set the cohorts data', () => {
    const payload = { 'cohort-1': 50, 'cohort-2': 60 };
    const expectedAction = { type: COHORTS.SET_DATA, payload };
    expect(setCohortsData(payload)).toEqual(expectedAction);
  });

  it('should create an action to check setCohortLoading type', () => {
    const expectedAction = { type: COHORTS.SET_LOADING };
    expect(setCohortLoading()).toEqual(expectedAction);
  });

  it('should create an action to check setCohortError type', () => {
    const expectedAction = { type: COHORTS.SET_ERROR };
    expect(setCohortError()).toEqual(expectedAction);
  });

  it('creates COHORTS.SET_DATA when fetching cohorts has been done', () => {
    const response = { data: { data: { 'cohort-1': 55, 'cohort-2': 65 } } };
    axios.get.mockResolvedValue(response);

    const expectedActions = [
      { type: COHORTS.SET_LOADING },
      { type: COHORTS.SET_DATA, payload: { 'cohort-1': 55, 'cohort-2': 65 } }
    ];
    const store = mockStore({ cohortApplicants: {} });

    return store.dispatch(fetchCohortsThunk()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
