import React, { useEffect } from 'react';
//TAILWIND STYLING
import './css/tailwind.css';
//OPERATIONAL LIBRARIES
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//ROUTING
import PrivateRoute from './routing/PrivateRoute';
//PAGES
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewAccount from './pages/NewAccount';
import Navbar from './components/layout/Navbar';
import News from './pages/News';
//IMPORT REDUX/STATE MANAGEMENT COMPONENTS
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import AccountSummary from './pages/AccountSummary';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className='bg-blue-600 min-h-screen max-h-screen text-white flex flex-col overflow-hidden'>
        <div className='flex'>
          <Navbar />
        </div>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/newaccount' component={NewAccount} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              path='/accounts/:accountID'
              component={AccountSummary}
            />
            <PrivateRoute exact path='/news' component={News} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
