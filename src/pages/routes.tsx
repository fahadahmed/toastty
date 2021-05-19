import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

import { AppProvider } from '../components/AppProvider/AppContext';
import PrivateRoute from '../components/PrivateRoute';

const Routes: FC = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default Routes;
