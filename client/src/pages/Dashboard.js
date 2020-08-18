import React from 'react';
import { Switch, Route, Router, Link, Redirect } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
//SUBPAGES============
import Sidebar from '../components/Sidebar';

const Dashboard = (props) => {
  return (
    <section className='container static w-full flex flex-col flex-auto'>
      <Sidebar />
    </section>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
