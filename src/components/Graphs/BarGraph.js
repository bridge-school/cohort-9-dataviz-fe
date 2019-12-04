import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  // Text,
  Tooltip,
  // Legend,
  ResponsiveContainer
} from 'recharts';
import { Title } from '../Title/Title';

export class BarGraph extends PureComponent {
  render() {
    const { data, title } = this.props;

    return (
      <>
        <Title text={title} />
        <ResponsiveContainer width="99%" height={500}>
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
            {/* <XAxis dataKey="name" interval={0} angle={30} dx={20} /> */}
            <XAxis dataKey="name" interval={0} tick={<CustomizedAxisTick />} />
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

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}
