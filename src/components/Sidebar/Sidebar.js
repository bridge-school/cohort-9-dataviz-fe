import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button } from '../Button/Button';
import { SidebarStyle } from './SidebarStyle';

export const Sidebar = () => {
  const { url } = useRouteMatch();

  return (
    <SidebarStyle>
      <Link to={`${url}/gender-identity`}>
        <Button text="gender identity" />
      </Link>
      <Link to={`${url}/minority-group`}>
        <Button text="minority groups" />
      </Link>
      <Link to={`${url}/previous-bootcamp`}>
        <Button text="dev bootcamp" />
      </Link>
      <Link to={`${url}/employment-status`}>
        <Button text="employment status" />
      </Link>
    </SidebarStyle>
  );
};
