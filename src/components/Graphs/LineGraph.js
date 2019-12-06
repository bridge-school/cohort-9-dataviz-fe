import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'cohort-6',
    count: 43
  },
  {
    name: 'cohort-8',
    count: 43
  },
  {
    name: 'cohort-7',
    count: 44
  }
];

export default class LineGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="99%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 50 }} />
          <YAxis type="number" domain={[40, 50]} dx={0}>
            <Label
              value="Amount of people applied"
              position="insideLeft"
              angle={-90}
              style={{
                textAnchor: 'middle',
                fontSize: 18,
                fontFamily: 'Open Sans'
              }}
            >
              Amount of people applied
            </Label>
          </YAxis>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
