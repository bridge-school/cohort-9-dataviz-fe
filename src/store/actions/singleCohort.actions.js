import { SINGLE_COHORT } from './actions.type';
import axios from 'axios';
import { API_URL } from '../../constants';

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
    .get(`${API_URL}/${cohortID}`)
    .then(res => {
      dispatch(setSingleCohortData(res.data.data));
    })
    .catch(error => {
      dispatch(setSingleCohortError());
    });
};
