//This is a file for the home page
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCohortsThunk } from '../store/actions/cohorts.actions';
import { Title } from '../components/Title/Title';
import { CohortList } from '../components/CohortList/CohortList';
import { LineGraph } from '../components/Graphs/LineGraph';
import { HomePageStyle } from './HomePageStyle';

//temp api result for cohorts
const cohorts = {
  "cohort-8": 43,
  "cohort-6": 43,
  "cohort-7": 44
};

export const HomePage = () => {
  const dispatch = useDispatch();
  const cohorts = useSelector(state => state.allCohorts.cohortApplicants);

  useEffect(() => {
    dispatch(fetchCohortsThunk());
  }, [dispatch]);

  return (
    <HomePageStyle>
      <Title />
      <CohortList cohorts={cohorts} />
      <LineGraph />
    </HomePageStyle>
  );
};
