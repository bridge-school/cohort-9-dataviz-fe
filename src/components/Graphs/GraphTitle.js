import React from 'react';
import { SubHeader } from '../../GlobalStyle';

export const GraphTitle = ({ text, lineGraph }) => {
  return lineGraph ? (
    <SubHeader fontLarge bold>
      {text}
    </SubHeader>
  ) : (
    <SubHeader fontLarge bold paddingLeftLarge>
      {text}
    </SubHeader>
  );
};
