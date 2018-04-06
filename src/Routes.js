import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../components/shared/LandingPage';
import HealthResources from '../components/shared/HealthResources';
import About from '../components/container/About';
import Login from '../components/container/Login';
import Signup from '../components/container/Signup';
import Footer from '../components/shared/Footer';

import '../App.css';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/health_resources" component={HealthResources} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes