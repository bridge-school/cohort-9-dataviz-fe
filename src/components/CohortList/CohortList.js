import React from "react";
import CohortListItem from "../CohortListItem/CohortListItem";


export const CohortList = ({cohorts}) => {
    const cohortsIdList = Object.keys(cohorts);
    const cohortsItems = cohortsIdList.map((cohortID, index) => (
        <CohortListItem cohortID={cohortID} key={cohortID+index}/>
    ))

  return (
    <div>
        <ul>
{cohortsItems}
        </ul>
    
    </div>
  );
};
