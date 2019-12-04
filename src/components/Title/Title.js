import React from 'react';
import { MainHeader } from '../../GlobalStyle';

export const Title = ({ title }) => {
  return (
    <MainHeader fontLarge bold>
      {title || `Cohorts`}
    </MainHeader>
  );
};
