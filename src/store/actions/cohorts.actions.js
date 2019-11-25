import axios from 'axios';
import { COHORTS } from './actions.type';

const setCohortsData = (cohorts = {}) => ({
  type: COHORTS.SET_DATA,
  payload: cohorts
});

export const fetchCohortsThunk = () => dispatch => {
  axios.get('/cohorts').then(res => dispatch(setCohortsData(res.data.data)));
};