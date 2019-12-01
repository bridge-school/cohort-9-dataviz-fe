import { COHORTS, SINGLE_COHORT } from '../actions/actions.type';

export const INITIAL_STATE = {
  cohortApplicants: {},
  cohortData: {
    isSingleCohortPending: false,
    isSingleCohortFailure: false
  }
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
    case SINGLE_COHORT.GET_COHORT_PENDING:
      return {
        ...state,
        isSingleCohortPending: true,
        isSingleCohortFailure: false
      };
    case SINGLE_COHORT.SET_DATA:
      return {
        ...state,
        isSingleCohortPending: false,
        isSingleCohortFailure: false,
        [action.id]: action.payload
      };
    case SINGLE_COHORT.GET_COHORT_FAILURE:
      return {
        ...state,
        isSingleCohortPending: false,
        isSingleCohortFailure: true
      };
    default:
      return state;
  }
};
