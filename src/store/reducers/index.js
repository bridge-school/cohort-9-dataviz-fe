import { combineReducers } from 'redux';
import { cohortsReducer } from './cohorts.reducer';
import { cohortDataReducer } from './singleCohort.reducer';

// import and add separate reducers into combineReducers
const rootReducer = combineReducers({
  allCohorts: cohortsReducer,
  cohortData: cohortDataReducer
});

export default rootReducer;
