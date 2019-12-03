import { SINGLE_COHORT } from '../actions/actions.type';

export const INITIAL_STATE = {
  isPending: false,
  isFailure: false
};

export const cohortDataReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SINGLE_COHORT.SET_LOADING:
      return {
        ...state,
        isPending: true,
        isFailure: false
      };
    case SINGLE_COHORT.SET_DATA:
      return {
        ...state,
        isPending: false,
        isFailure: false,
        [action.id]: action.payload
      };
    case SINGLE_COHORT.SET_ERROR:
      return {
        ...state,
        isPending: false,
        isFailure: true
      };
    default:
      return state;
  }
};
