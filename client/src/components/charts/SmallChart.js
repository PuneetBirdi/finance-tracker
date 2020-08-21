import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area } from 'recharts';

const data = [
  {
    uv: 4000,
  },
  {
    uv: 3000,
  },
  {
    uv: 2000,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
  {
    uv: 2390,
  },
  {
    uv: 3490,
  },
];

const SmallChart = (props) => {
  return (
    <AreaChart
      width={200}
      height={30}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
    </AreaChart>
  );
};

SmallChart.propTypes = {};

export default SmallChart;
