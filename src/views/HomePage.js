//This is a file for the home page
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCohortsThunk } from '../store/actions/cohorts.actions';
import { Title } from '../components/Title/Title';
import { CohortList } from '../components/CohortList/CohortList';
import { LineGraph } from '../components/Graphs/LineGraph';
import { HomePageStyle } from './HomePageStyle';

// TODO: change name before PR
const View = ({ fetchCohorts }) => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    fetchCohorts();
  }, [fetchCohorts]);

  return (
    <HomePageStyle>
      <Title />
      <CohortList />
      <LineGraph />
    </HomePageStyle>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchCohorts: () => dispatch(fetchCohortsThunk())
});

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(View);
