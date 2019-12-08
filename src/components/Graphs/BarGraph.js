import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { CustomizedAxisTick } from './CustomizedAxisTick';
import { GraphTitle } from './GraphTitle';

export class BarGraph extends PureComponent {
  render() {
    const { data, title, fillColor } = this.props;

    return (
      <>
        <GraphTitle text={title} />
        <ResponsiveContainer width="100%" height={600}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 175 }}
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
            <YAxis type="number">
              <Label
                value="Number of responses"
                position="insideLeft"
                angle={-90}
                style={{
                  textAnchor: 'middle',
                  fontSize: 18,
                  fontFamily: 'Open Sans'
                }}
              >
                Number of responses
              </Label>
            </YAxis>
            <Tooltip />
            {/* <Legend /> */}
            <Bar
              type="monotone"
              dataKey="count"
              barSize={100}
              fill={fillColor}
            />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
