import React, { useState, useEffect } from 'react';
import CohortListItem from '../CohortListItem/CohortListItem';
import { List } from './CohortListStyle';
import { useSelector } from 'react-redux';

export const CohortList = () => {
  const cohorts = useSelector(state => state.allCohorts.cohortApplicants);
  const [cohortsItems, setCohortItems] = useState([]);

  useEffect(() => {
    if (cohorts.length > 0) {
      const cohortsItemsList = cohorts.reverse().map((cohort, index) => {
        return <CohortListItem cohortID={cohort.id} key={cohort.id + index} />;
      });
      setCohortItems(cohortsItemsList);
    }
  }, [cohorts]);

  return <div>{cohortsItems && <List>{cohortsItems}</List>}</div>;
};
