import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "cohort-6",
    count: 43
  },
  {
    name: "cohort-7",
    count: 44
  },
  {
    name: "cohort-8",
    count: 43
  }
];

export default class Example extends PureComponent {
  render() {
    return (
      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 10,
          left: 10,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
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
    );
  }
}
