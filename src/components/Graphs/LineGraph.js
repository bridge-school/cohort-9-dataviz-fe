import React, { PureComponent } from 'react';
import { LineGraphStyle } from './LineGraphStyle';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
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
      <LineGraphStyle>
        <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </LineGraphStyle>
    );
  }
}
