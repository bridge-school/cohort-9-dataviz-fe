import axios from 'axios';
import { COHORTS } from './actions.type';
import { API_URL } from '../../constants';

export const setCohortsData = (cohorts = {}) => ({
  type: COHORTS.SET_DATA,
  payload: cohorts
});

export const setCohortLoading = () => ({
  type: COHORTS.SET_LOADING
});

export const setCohortError = () => ({
  type: COHORTS.SET_ERROR
});

export const fetchCohortsThunk = () => dispatch => {
  dispatch(setCohortLoading());
  return axios
    .get(API_URL)
    .then(res => dispatch(setCohortsData(res.data.data)))
    .catch(err => {
      console.log('There is an error', err.message);
      dispatch(setCohortError());
    });
};
