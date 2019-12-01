import axios from 'axios';
import { COHORTS, SINGLE_COHORT } from './actions.type';

export const setCohortsData = (cohorts = {}) => ({
  type: COHORTS.SET_DATA,
  payload: cohorts
});

export const fetchCohortsThunk = () => dispatch => {
  // TODO: Add error handling
  return axios
    .get('/cohorts')
    .then(res => dispatch(setCohortsData(res.data.data)));
};

export const fetchActiveCohort = cohortID => dispatch => {
  return axios
    .get('http://www.mocky.io/v2/5de1ae19320000d57a8094c7')
    .then(res =>
      dispatch({
        type: SINGLE_COHORT.SET_DATA,
        payload: res.data,
        id: cohortID
      })
    );
};
