import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const CohortListItem = ({cohortID, key}) => {
    return(
        <li key={key}><Link to={`/cohorts/${cohortID}`}>{cohortID}</Link></li>
    )
}

export default withRouter(CohortListItem);