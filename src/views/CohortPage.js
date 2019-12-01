import React, { useEffect } from 'react';
import { Title } from '../components/Title/Title';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { BarGraph } from '../components/Graphs/BarGraph';
import { CohortPageStyle } from './CohortPageStyle';
import { GraphSectionStyle } from './GraphSectionStyle';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActiveCohort } from '../store/actions/singleCohort.actions';

//import "../views/CohortPage.scss";

const CohortPage = props => {
  const { history } = props;
  const cohortID = `cohort-${history.location.pathname.split('/')[2]}`;

  const dispatch = useDispatch();
  const cohort = useSelector(state => state.activeCohort[cohortID]);

  const s = useSelector(state => state);
  console.log('state', s);
  console.log('cohort', cohort);

  useEffect(() => {
    if (!cohort) dispatch(fetchActiveCohort(cohortID));
  }, [dispatch]);

  return (
    <CohortPageStyle>
      <Sidebar />
      <GraphSectionStyle>
        <Title />
        <BarGraph />
      </GraphSectionStyle>
    </CohortPageStyle>
  );
};

export default withRouter(CohortPage);
