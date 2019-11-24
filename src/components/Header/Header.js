import React from "react";
import logo from "../../bridgeLogo.svg";
import {HeaderStyle} from "./HeaderStyle";
import {LogoStyle} from "./LogoStyle";



export const Header = () => {
  return (
    <HeaderStyle className="header">
      <LogoStyle className="logo" src={logo} alt="Logo" />
      Cohort Application Data
    </HeaderStyle>
  );
};
