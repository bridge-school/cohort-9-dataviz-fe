//This is a file for the home page
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCohortsThunk } from '../store/actions/cohorts.actions';
import { Title } from '../components/Title/Title';
import { CohortList } from '../components/CohortList/CohortList';
import LineGraph from '../components/Graphs/LineGraph';
import { HomePageStyle } from './HomePageStyle';
import { Wrapper } from '../GlobalStyle';

export const HomePage = () => {
  const dispatch = useDispatch();
  const cohorts = useSelector(state => state.allCohorts.cohortApplicants);

  useEffect(() => {
    dispatch(fetchCohortsThunk());
  }, [dispatch]);

  return (
    <HomePageStyle>
      <Wrapper column flex>
        <Title />
        <LineGraph />
        <CohortList cohorts={cohorts} />
      </Wrapper>
    </HomePageStyle>
  );
};
