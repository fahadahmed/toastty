import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/home" render={() => <h1>Home Page</h1>} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default Routes;
