import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Splash from '../containers/Splash';

const history = createBrowserHistory();
const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Splash} />
    </Switch>
  </Router>
);

export default App;
