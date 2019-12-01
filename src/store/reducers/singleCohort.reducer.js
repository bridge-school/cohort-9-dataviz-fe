import { SINGLE_COHORT } from '../actions/actions.type';

export const INITIAL_STATE = {
  isSingleCohortPending: false,
  isSingleCohortFailure: false
};

export const cohortDataReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SINGLE_COHORT.SET_LOADING:
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
    case SINGLE_COHORT.SET_ERROR:
      return {
        ...state,
        isSingleCohortPending: false,
        isSingleCohortFailure: true
      };
    default:
      return state;
  }
};
