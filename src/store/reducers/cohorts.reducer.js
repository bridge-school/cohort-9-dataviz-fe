import { COHORTS, SINGLE_COHORT } from '../actions/actions.type';

export const INITIAL_STATE = {
  cohortApplicants: {},
  cohortData: {}
};

export const cohortsReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case COHORTS.SET_DATA:
      return { ...state, cohortApplicants: action.payload };
    default:
      return state;
  }
};

export const cohortDataReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case SINGLE_COHORT.SET_DATA:
      return { ...state, [action.id]: action.payload };
    default:
      return state;
  }
};
