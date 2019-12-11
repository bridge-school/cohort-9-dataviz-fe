import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { Sidebar } from '../components/Sidebar/Sidebar';
import { CohortPageStyle, NotificationStyle } from './CohortPageStyle';
import { GraphSectionStyle } from './GraphSectionStyle';
import { fetchSingleCohortData } from '../store/actions/singleCohort.actions';
import { GraphRoutes } from './GraphRoutes';

const renderView = (isPending, isFailure, cohort, cohortID) => {
  if (isPending || isEmpty(cohort)) {
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
  } else if (!isEmpty(cohort)) {
    return <GraphRoutes cohortID={cohortID} cohort={cohort} />;
  }
};

export const CohortPage = () => {
  const { url } = useRouteMatch();
  const cohortID = url.split('/')[2];
  const dispatch = useDispatch();
  const cohort = useSelector(state => state.cohortData[`cohort-${cohortID}`]);
  const isPending = useSelector(state => state.cohortData.isPending);
  const isFailure = useSelector(state => state.cohortData.isFailure);

  useEffect(() => {
    if (!cohort) dispatch(fetchSingleCohortData(cohortID));
  }, [cohort, cohortID, dispatch]);

  return (
    <CohortPageStyle grid>
      <Sidebar />
      <GraphSectionStyle>
        {renderView(isPending, isFailure, cohort, cohortID)}
      </GraphSectionStyle>
    </CohortPageStyle>
  );
};
