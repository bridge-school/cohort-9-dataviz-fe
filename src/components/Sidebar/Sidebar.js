import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Badge } from '../../GlobalStyle';
import { SidebarStyle } from './SidebarStyle';

export const Sidebar = () => {
  const { url } = useRouteMatch();

  return (
    <SidebarStyle>
      <Link to={`${url}/gender-identity`}>
        <Badge white fontSmall textCenter marginBottomMedium>
          gender identity
        </Badge>
      </Link>
      <Link to={`${url}/minority-group`}>
        <Badge white fontSmall textCenter marginBottomMedium>
          minority groups
        </Badge>
      </Link>
      <Link to={`${url}/previous-bootcamp`}>
        <Badge white fontSmall textCenter marginBottomMedium>
          dev bootcamp
        </Badge>
      </Link>

      <Link to={`${url}/employment-status`}>
        <Badge white fontSmall textCenter>
          employment status
        </Badge>
      </Link>
    </SidebarStyle>
  );
};
