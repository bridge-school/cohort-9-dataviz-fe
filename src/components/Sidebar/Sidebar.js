import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { SidebarStyle } from './SidebarStyle';

export const Sidebar = () => {
  const { url } = useRouteMatch();

  return (
    <SidebarStyle>
      <Link to={`${url}/gender-identity`}>gender identity</Link>
      <Link to={`${url}/minority-group`}>minority groups</Link>
      <Link to={`${url}/previous-bootcamp`}>dev bootcamp</Link>
      <Link to={`${url}/employment-status`}>employment status</Link>
    </SidebarStyle>
  );
};
