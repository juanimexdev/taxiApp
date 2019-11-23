import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Splash from '../containers/Splash';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Home from '../containers/Home';
import TaxiSelect from '../containers/TaxiSelect';

const history = createBrowserHistory();
const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Splash} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/taxiselect' component={TaxiSelect} />
    </Switch>
  </Router>
);

export default App;
