import React from 'react';
import { MainHeader } from '../../GlobalStyle';

export const Title = ({ text }) => {
  return (
    <MainHeader fontLarge bold>
      {text}
    </MainHeader>
  );
};
