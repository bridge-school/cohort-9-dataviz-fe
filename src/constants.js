export const API_URL =
  process.env.NODE_ENV === 'development'
    ? '/cohorts'
    : 'https://cohort-9-data-viz.herokuapp.com/cohorts';
