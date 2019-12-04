import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ListItem } from './CohortListItemStyle';
import { Badge } from '../../GlobalStyle';

const CohortListItem = ({ cohortID, key }) => {
  const formatedLabel =
    cohortID.charAt(0).toUpperCase() + cohortID.slice(1).replace('-', ' ');
  return (
    <ListItem
      flex
      justify="space-between"
      align="center"
      fontMedium
      bold
      key={key}
    >
      <Link
        to={`/cohorts/${cohortID}`}
        style={{ color: '#000', textDecoration: 'none' }}
      >
        {formatedLabel}
      </Link>
      <Badge white fontSmall>
        front-end development
      </Badge>
    </ListItem>
  );
};

export default withRouter(CohortListItem);
