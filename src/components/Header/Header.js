import React from 'react';
import logo from '../../bridgeLogo.svg';
import { HeaderStyle } from './HeaderStyle';
import { LogoStyle } from './LogoStyle';
import { Wrapper } from '../../GlobalStyle';

export const Header = () => {
  return (
    <HeaderStyle>
      <Wrapper bold white fontMedium flex align="center" row>
        <LogoStyle src={logo} alt="Logo" />
        Cohort Application Data
      </Wrapper>
    </HeaderStyle>
  );
};
