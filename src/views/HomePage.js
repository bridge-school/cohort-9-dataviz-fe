//This is a file for the home page
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCohortsThunk } from '../store/actions/cohorts.actions';
import { Title } from '../components/Title/Title';
import { CohortList } from '../components/CohortList/CohortList';
import { LineGraph } from '../components/Graphs/LineGraph';
import { HomePageStyle } from './HomePageStyle';

const HomePageComponent = ({ cohorts, fetchCohorts }) => {
  useEffect(() => {
    fetchCohorts();
  }, [fetchCohorts]);

  return (
    <HomePageStyle>
      <Title />
      <CohortList cohorts={cohorts} />
      <LineGraph />
    </HomePageStyle>
  );
};

const mapStateToProps = state => ({
  cohorts: state.allCohorts.cohortApplicants
});

const mapDispatchToProps = dispatch => ({
  fetchCohorts: () => dispatch(fetchCohortsThunk())
});

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);
