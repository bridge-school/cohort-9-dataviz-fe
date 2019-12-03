import { combineReducers } from 'redux';
import { cohortsReducer } from './cohorts.reducer';

// import and add separate reducers into combineReducers
const rootReducer = combineReducers({ allCohorts: cohortsReducer });

export default rootReducer;
