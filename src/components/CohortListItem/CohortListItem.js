import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import {ListItem} from './CohortListItemStyle';

const CohortListItem = ({cohortID, key}) => {
    return(
        <ListItem key={key}><Link to={`/cohorts/${cohortID}`}>{cohortID}</Link></ListItem>
    )
}

export default withRouter(CohortListItem);