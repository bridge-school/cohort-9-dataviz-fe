import { cohortsReducer } from './cohorts.reducer';
import { setCohortsData } from '../actions/cohorts.actions';

const initialState = {
  cohortApplicants: {}
};

describe('Cohorts Reducer', () => {
  it('returns initial state', () => {
    expect(cohortsReducer(undefined, {})).toEqual({});
  });

  describe('when a COHORTS.SET_DATA action is dispatched', () => {
    it('returns a new version of the state with cohortApplicants containing the new data', () => {
      const testCohortsData = { 'cohort-1': 50, 'cohort-2': 60 };
      const cohortAction = setCohortsData(testCohortsData);
      expect(cohortsReducer(initialState, cohortAction)).toEqual({
        ...initialState,
        cohortApplicants: { 'cohort-1': 50, 'cohort-2': 60 }
      });
    });
  });
});
