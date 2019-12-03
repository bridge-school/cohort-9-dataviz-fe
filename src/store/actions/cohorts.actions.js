import axios from 'axios';
import { COHORTS } from './actions.type';
import { API_URL } from '../../constants';

export const setCohortsData = (cohorts = {}) => ({
  type: COHORTS.SET_DATA,
  payload: cohorts
});

export const fetchCohortsThunk = () => dispatch => {
  // TODO: Add error handling
  return axios
    .get(API_URL)
    .then(res => dispatch(setCohortsData(res.data.data)));
};
