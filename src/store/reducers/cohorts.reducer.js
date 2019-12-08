import { COHORTS } from '../actions/actions.type';

export const INITIAL_STATE = {
  cohortApplicants: {},
  isPending: false,
  isFailure: false
};

export const cohortsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case COHORTS.SET_LOADING:
      return {
        ...state,
        isPending: true,
        isFailure: false
      };

    case COHORTS.SET_DATA:
      return {
        ...state,
        cohortApplicants: action.payload,
        isPending: false,
        isFailure: false
      };

    case COHORTS.SET_ERROR:
      return {
        ...state,
        isPending: false,
        isFailure: true
      };
    default:
      return state;
  }
};
