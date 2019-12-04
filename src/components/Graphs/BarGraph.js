import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { CustomizedAxisTick } from './CustomizedAxisTick';
import { Title } from '../Title/Title';

export class BarGraph extends PureComponent {
  render() {
    const { data, title } = this.props;

    return (
      <>
        <Title text={title} />
        <ResponsiveContainer width="95%" height={600}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 175
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval={0}
              tick={<CustomizedAxisTick />}
              height={50}
              maxChars={200}
              width={300}
            />
            <YAxis type="number" />
            <Tooltip />
            {/* <Legend /> */}
            <Bar type="monotone" dataKey="count" barSize={100} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
