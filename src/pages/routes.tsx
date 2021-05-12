import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
