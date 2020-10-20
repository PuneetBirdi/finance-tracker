import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const SmallChart = ({ color, snapshots }) => {
  return (
    <ResponsiveContainer>
    <AreaChart
    data={snapshots}
    margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>      
          <Area type='monotone' dataKey='balance' fillOpacity={0.15} stroke='none' fill={color} />
    </AreaChart>
    </ResponsiveContainer>
  );
};

SmallChart.propTypes = {
  color: PropTypes.string.isRequired,
  snapshots: PropTypes.array.isRequired,
};

export default SmallChart;
