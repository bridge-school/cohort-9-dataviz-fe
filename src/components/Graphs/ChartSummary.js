import React from 'react';
import { ChartSummaryStyle } from './ChartSummaryStyle';

export const ChartSummary = ({ appliData, answData }) => {
  return (
    <ChartSummaryStyle
      fontMedium
    >{`${answData}/${appliData} Applicants Answered`}</ChartSummaryStyle>
  );
};
