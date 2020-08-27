import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area } from 'recharts';

const SmallChart = ({ color, snapshots }) => {
  return (
    <AreaChart
      width={200}
      height={30}
      data={snapshots}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Area type='monotone' dataKey='balance' stroke={color} fill={color} />
    </AreaChart>
  );
};

SmallChart.propTypes = {
  color: PropTypes.string.isRequired,
  snapshots: PropTypes.array.isRequired,
};

export default SmallChart;
