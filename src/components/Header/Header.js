import React from 'react';
import logo from '../../bridgeLogo.svg';
import { HeaderStyle } from './HeaderStyle';
import { LogoStyle } from './LogoStyle';
import { Wrapper, Badge } from '../../GlobalStyle';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <Wrapper flex="space-between">
        <Wrapper bold white fontMedium flex align="center" row>
          <LogoStyle
            src={logo}
            alt="Logo"
            onClick={() => history.push('/home')}
            pointer
          />
          Cohort Application Data
        </Wrapper>
        <Badge
          white
          fontSmall
          align="self"
          onClick={() => history.push('/home')}
          pointer
        >
          Home
        </Badge>
      </Wrapper>
    </HeaderStyle>
  );
};
