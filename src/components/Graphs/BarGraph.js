import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

export class BarGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="99%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="count" barSize={100} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
