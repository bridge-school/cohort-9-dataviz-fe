import { SINGLE_COHORT } from './actions.type';
import axios from 'axios';

export const setSingleCohortData = (cohort = {}) => ({
  type: SINGLE_COHORT.SET_DATA,
  payload: cohort,
  id: cohort.id
});

export const setSingleCohortLoading = () => ({
  type: SINGLE_COHORT.SET_LOADING
});

export const setSingleCohortError = () => ({
  type: SINGLE_COHORT.SET_ERROR
});

export const fetchSingleCohortData = cohortID => dispatch => {
  dispatch(setSingleCohortLoading());
  return axios
    .get('http://www.mocky.io/v2/5de4325d3000005b009f7927')
    .then(res => {
      dispatch(setSingleCohortData(res.data.data));
    })
    .catch(error => {
      console.log('There is an error', error.message);
      dispatch(setSingleCohortError());
    });
};
