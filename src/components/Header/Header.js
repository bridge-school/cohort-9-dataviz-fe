import React from 'react';
import logo from '../../bridgeLogo.svg';
import { HeaderStyle } from './HeaderStyle';
import { LogoStyle } from './LogoStyle';
import { Wrapper, Badge } from '../../GlobalStyle';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderStyle>
      <Wrapper flex="space-between">
        <Wrapper bold white fontMedium flex align="center" row>
          <Link
            to="/home"
            label="Home"
            style={{ textDecoration: 'none', alignSelf: 'center' }}
          >
            <LogoStyle src={logo} alt="Logo" />
          </Link>
          BridgeViz - Application Data Portal
        </Wrapper>
        <Link
          to="/home"
          label="Home"
          style={{ textDecoration: 'none', alignSelf: 'center' }}
        >
          <Badge white fontSmall align="self">
            Home
          </Badge>
        </Link>
      </Wrapper>
    </HeaderStyle>
  );
};
