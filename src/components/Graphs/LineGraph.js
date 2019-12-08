import React, { PureComponent } from 'react';
import { GraphTitle } from './GraphTitle';
import { CustomizedAxisTick } from './CustomizedAxisTick';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer
} from 'recharts';

export default class LineGraph extends PureComponent {
  render() {
    const reversed = [...this.props.cohorts].reverse();
    return (
      <>
        <GraphTitle text={'Applicants by Cohort'} />
        <ResponsiveContainer width="99%" height={400}>
          <LineChart
            data={reversed}
            margin={{ top: 5, right: 5, left: 5, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="id"
              padding={{ left: 0 }}
              tick={<CustomizedAxisTick fontSize={18} />}
            />
            <YAxis type="number" domain={[40, 50]} dx={0}>
              <Label
                value="Number of Applicants"
                position="insideLeft"
                angle={-90}
                style={{
                  textAnchor: 'middle',
                  fontSize: 18,
                  fontFamily: 'Open Sans'
                }}
              >
                Number of Applicants
              </Label>
            </YAxis>

            <Tooltip />
            <Line
              type="monotone"
              dataKey="applicants"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}
