import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard/Dashboard';
import './styles.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
  </Switch>
);

export default App;
