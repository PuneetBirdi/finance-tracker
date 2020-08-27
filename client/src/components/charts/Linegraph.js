import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';

const Linegraph = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 450 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 5,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='coloramt' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#4FD1C5' stopOpacity={0.95} />
              <stop offset='95%' stopColor='#4FD1C5' stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type='monotone'
            dataKey='balance'
            stroke='#4FD1C5'
            fillOpacity={1}
            fill='url(#coloramt)'
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

Linegraph.propTypes = {
  data: PropTypes.array.isRequired,
  getTransactions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.portfolio.history,
});

export default connect(mapStateToProps)(Linegraph);
