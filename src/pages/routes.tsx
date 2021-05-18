import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

const Routes: FC = () => {
  console.log(process.env.REACT_APP_PROJECT_ID); 
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
