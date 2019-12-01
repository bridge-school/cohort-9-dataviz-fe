import { combineReducers } from 'redux';
import { cohortsReducer, cohortDataReducer } from './cohorts.reducer';

// import and add separate reducers into combineReducers
const rootReducer = combineReducers({
  allCohorts: cohortsReducer,
  activeCohort: cohortDataReducer
});

export default rootReducer;
