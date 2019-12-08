import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ListItem } from './CohortListItemStyle';
import { Badge } from '../../GlobalStyle';

const CohortListItem = ({ cohortID, key }) => {
  const formattedLabel =
    cohortID.charAt(0).toUpperCase() + cohortID.slice(1).replace('-', ' ');
  const cohortNumber = cohortID.split('-')[1];

  return (
    <ListItem
      flex
      justify="space-between"
      align="center"
      fontMedium
      bold
      key={key}
    >
      {formattedLabel}
      <Link
        to={`/cohorts/${cohortNumber}`}
        style={{ color: '#000', textDecoration: 'none' }}
      >
        <Badge white fontSmall normal>
          Check details
        </Badge>
      </Link>
    </ListItem>
  );
};

export default withRouter(CohortListItem);
