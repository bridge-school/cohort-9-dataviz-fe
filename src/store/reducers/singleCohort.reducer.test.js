import { cohortDataReducer } from './singleCohort.reducer';
import { setSingleCohortData } from '../actions/singleCohort.actions';

const initialState = {
  isPending: false,
  isFailure: false
};
// const test = {
//   'cohort-1': {
//     id: 'cohort-1',
//     gender: [
//       { name: 'Female', count: 45 },
//       { name: 'Male', count: 900 }
//     ]
//   }
// };

describe('Single cohort reducer', () => {
  it('returns initial state', () => {
    expect(cohortDataReducer(undefined, {})).toEqual(initialState);
  });
});
