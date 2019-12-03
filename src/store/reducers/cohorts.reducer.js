import { COHORTS } from '../actions/actions.type';

export const INITIAL_STATE = {
  cohortApplicants: {}
};

export const cohortsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case COHORTS.SET_DATA:
      return { ...state, cohortApplicants: action.payload };
    default:
      return state;
  }
};
