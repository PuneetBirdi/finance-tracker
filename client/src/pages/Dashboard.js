import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Overview';
//SUBPAGES============
import Sidebar from '../components/layout/Sidebar';

const Dashboard = (props) => {
  return (
    <section className='container static flex-1 h-full max-h-full min-w-full flex'>
      <Sidebar />
      <Overview />
    </section>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
