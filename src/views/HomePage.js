//This is a file for the home page
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { fetchCohortsThunk } from '../store/actions/cohorts.actions';
import { Title } from '../components/Title/Title';
import { CohortList } from '../components/CohortList/CohortList';
import LineGraph from '../components/Graphs/LineGraph';
import { HomePageStyle, NotificationStyle } from './HomePageStyle';
import { Wrapper } from '../GlobalStyle';

const renderView = (isPending, isFailure, cohorts) => {
  if (isPending) {
    return (
      <NotificationStyle align="center" alignSelf="center" blue fontLarge>
        Loading...
      </NotificationStyle>
    );
  } else if (isFailure) {
    return (
      <NotificationStyle align="center" alignSelf="center" pink fontLarge>
        Sorry, something went wrong. Please try again later.
      </NotificationStyle>
    );
  } else if (!isEmpty(cohorts)) {
    return (
      <div>
        <Title text="Cohorts" />
        <LineGraph cohorts={cohorts} />
        <CohortList />
      </div>
    );
  }
};

export const HomePage = () => {
  const dispatch = useDispatch();
  const cohorts = useSelector(state => state.allCohorts.cohortApplicants);
  const isPending = useSelector(state => state.allCohorts.isPending);
  const isFailure = useSelector(state => state.allCohorts.isFailure);

  useEffect(() => {
    dispatch(fetchCohortsThunk());
  }, [dispatch]);

  return (
    <HomePageStyle>
      <Wrapper column flex>
        {renderView(isPending, isFailure, cohorts)}
      </Wrapper>
    </HomePageStyle>
  );
};
