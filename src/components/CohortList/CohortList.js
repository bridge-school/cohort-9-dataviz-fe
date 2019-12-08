import React from 'react';
import CohortListItem from '../CohortListItem/CohortListItem';
import { List } from './CohortListStyle';
import { useSelector } from 'react-redux';

export const CohortList = () => {
  const cohorts = useSelector(state =>
    state.allCohorts.cohortApplicants.reverse()
  );
  return (
    <List>
      {cohorts.map((cohort, index) => (
        <CohortListItem cohortID={cohort.id} key={cohort.id + index} />
      ))}
    </List>
  );
};
