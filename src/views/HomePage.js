import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCohortsThunk } from '../store/actions/cohorts.actions';

const HomePage = ({ fetchCohorts }) => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    fetchCohorts();
  }, [fetchCohorts]);

  return <div></div>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchCohorts: () => dispatch(fetchCohortsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
