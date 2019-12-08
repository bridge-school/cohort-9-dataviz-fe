import React, { PureComponent } from 'react';

export class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x,
      y,
      payload,
      maxChars,
      lineHeight,
      width,
      fontSize,
      fill
    } = this.props;

    // const rx = new RegExp(`.{1,${maxChars}}`, 'g');
    // const chunks = payload.value
    //   .replace(/-/g, ' ')
    //   .split(' ')
    //   .map(s => s.match(rx))
    //   .flat();
    // const tspans = chunks.map((s, i) => (
    //   <tspan x={0} y={lineHeight} dy={i * lineHeight} key={i}>
    //     {s}
    //   </tspan>
    // ));

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          width={width}
          height="auto"
          textAnchor="middle"
          fontSize={fontSize}
          fill={fill}
          dy={25}
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

CustomizedAxisTick.defaultProps = {
  width: 50,
  maxChars: 10,
  fontSize: 12,
  lineHeight: 18,
  fill: '#666'
};

export class CustomizedRotatedAxisTick extends PureComponent {
  render() {
    const { x, y, payload, fontSize } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          fontSize={fontSize}
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

CustomizedRotatedAxisTick.defaultProps = {
  fontSize: 12
};
