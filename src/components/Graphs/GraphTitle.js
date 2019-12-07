import React from 'react';
import { SubHeader } from '../../GlobalStyle';

export const GraphTitle = ({ text }) => {
  return (
    <SubHeader fontLarge bold paddingLeftLarge>
      {text}
    </SubHeader>
  );
};
