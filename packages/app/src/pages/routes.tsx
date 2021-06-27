import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

import { AppProvider } from '../components/AppProvider/AppContext';
import PrivateRoute from '../components/PrivateRoute';
import AppContainer from '../components/AppContainer';

const Routes: FC = () => {
  return (
    <AppProvider>
      <AppContainer>
        <Router>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Router>
      </AppContainer>
    </AppProvider>
  );
};

export default Routes;