import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { BarGraph } from '../components/Graphs/BarGraph';
import { CohortPageStyle } from './CohortPageStyle';
import { GraphSectionStyle } from './GraphSectionStyle';
// import { Wrapper } from '../GlobalStyle';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCohortData } from '../store/actions/singleCohort.actions';

const CohortPage = props => {
  const { history } = props;
  const cohortID = history.location.pathname.split('/')[2];
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const cohort = useSelector(state => state.cohortData[`cohort-${cohortID}`]);

  useEffect(() => {
    if (!cohort) dispatch(fetchSingleCohortData(cohortID));
  }, [cohort, cohortID, dispatch]);

  const renderGraphRoutes = () => (
    <>
      {/* Shows gender identity graph as the default */}
      {/* TODO: redirect / to /gender-identity right away */}
      <Route exact path={path}>
        <BarGraph
          title={`Cohort ${cohortID}: Gender Identity`}
          data={cohort.gender}
        />
      </Route>
      <Route path={`${path}/gender-identity`}>
        <BarGraph
          title={`Cohort ${cohortID}: Gender Identity`}
          data={cohort.gender}
        />
      </Route>
      <Route path={`${path}/minority-group`}>
        <BarGraph
          title={`Cohort ${cohortID}: Minority Groups`}
          data={cohort.minorityGroup}
        />
      </Route>
      <Route path={`${path}/previous-bootcamp`}>
        <BarGraph
          title={`Cohort ${cohortID}: Previous Bootcamp`}
          data={cohort.previousBootcamp}
        />
      </Route>
      <Route path={`${path}/employment-status`}>
        <BarGraph
          title={`Cohort ${cohortID}: Employment Status`}
          data={cohort.employmentStatus}
        />
      </Route>
    </>
  );

  return (
    <CohortPageStyle grid>
      <Sidebar />
      <GraphSectionStyle>{cohort && renderGraphRoutes()}</GraphSectionStyle>
    </CohortPageStyle>
  );
};

export default withRouter(CohortPage);
