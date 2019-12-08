import React, { useEffect } from 'react';
import { Route, useRouteMatch, useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withTheme } from 'styled-components';

import { Sidebar } from '../components/Sidebar/Sidebar';
import { BarGraph } from '../components/Graphs/BarGraph';
import { CohortPageStyle } from './CohortPageStyle';
import { GraphSectionStyle } from './GraphSectionStyle';
import { fetchSingleCohortData } from '../store/actions/singleCohort.actions';

const CohortPage = ({ theme }) => {
  const history = useHistory();
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
          fillColor={theme.color.green}
        />
      </Route>
      <Route path={`${path}/gender-identity`}>
        <BarGraph
          title={`Cohort ${cohortID}: Gender Identity`}
          data={cohort.gender}
          fillColor={theme.color.green}
        />
      </Route>
      <Route path={`${path}/minority-group`}>
        <BarGraph
          title={`Cohort ${cohortID}: Minority Groups`}
          data={cohort.minorityGroup}
          fillColor={theme.color.aqua}
        />
      </Route>
      <Route path={`${path}/previous-bootcamp`}>
        <BarGraph
          title={`Cohort ${cohortID}: Previous Bootcamp`}
          data={cohort.previousBootcamp}
          fillColor={theme.color.pink}
        />
      </Route>
      <Route path={`${path}/employment-status`}>
        <BarGraph
          title={`Cohort ${cohortID}: Employment Status`}
          data={cohort.employmentStatus}
          fillColor={theme.color.bluePurple}
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

export default withRouter(withTheme(CohortPage));
