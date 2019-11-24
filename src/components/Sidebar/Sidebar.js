import React from "react";
import { Button } from "../Button/Button";
import { SidebarStyle } from "./SidebarStyle";

export const Sidebar = () => {
  return (
    <SidebarStyle className="sidebar">
      <Button />
      <Button />
      <Button />
      <Button />
    </SidebarStyle>
  );
};
