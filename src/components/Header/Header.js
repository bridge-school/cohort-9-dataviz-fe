import React from "react";
import logo from "../../bridgeLogo.svg";
import {HeaderStyle} from "./HeaderStyle";
import {LogoStyle} from "./LogoStyle";



export const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle src={logo} alt="Logo" />
      Cohort Application Data
    </HeaderStyle>
  );
};
