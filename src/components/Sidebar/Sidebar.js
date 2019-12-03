import React from 'react';
import { Button } from '../Button/Button';
import { SidebarStyle } from './SidebarStyle';

export const Sidebar = () => {
  return (
    <SidebarStyle>
      <Button text="gender identity" />
      <Button text="minority groups" />
      <Button text="dev bootcamp" />
      <Button text="employment status" />
    </SidebarStyle>
  );
};
