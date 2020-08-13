import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Linegraph = (props) => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 6490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className='rounded-lg text-gray-600 bg-white shadow-xl px-6 pt-4 pb-6 mb-4 w-full h-full'>
      <div>
        <p className='text-xs tracking-tight text-gray-600 font-semibold text-right'>
          Portfolio Value:
        </p>
        <p className='text-3xl tracking-tight text-gray-800 font-bold text-right'>
          $560,260.15
        </p>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#3182CE'
              fill='#4299E1'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

Linegraph.propTypes = {};

export default Linegraph;
