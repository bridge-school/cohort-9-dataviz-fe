import React from "react";
import logo from "../../bridgeLogo.svg";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  background-color: rgb(78, 87, 202);
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 75%;
  padding: 6px 2vh;
`;


export const Header = () => {
  return (
    <HeaderStyle className="header">
      <Logo className="logo" src={logo} alt="Logo" />
      Cohort Application Data
    </HeaderStyle>
  );
};
