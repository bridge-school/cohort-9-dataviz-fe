import axios from 'axios';
import { SET_COHORTS_DATA } from './actions.type';

const API_URL = 'http://localhost:8081/cohorts';

const setCohortsData = (cohorts = {}) => ({
  type: SET_COHORTS_DATA,
  payload: cohorts
});

export const fetchCohortsThunk = () => dispatch => {
  axios.get('/cohorts').then(console.log);
};
