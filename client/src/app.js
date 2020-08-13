import React from 'react';
//TAILWIND STYLING
import './css/tailwind.css';
//OPERATIONAL LIBRARIES
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//PAGES
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewAccount from './pages/NewAccount';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className='bg-blue-500 min-h-screen text-white flex flex-col'>
      <div className='flex mb-4'>
        <Navbar />
      </div>
      <Router>
        <div className='container w-11/12 mx-auto flex flex-col flex-auto justify-center items-center'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/newAccount' component={NewAccount} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
