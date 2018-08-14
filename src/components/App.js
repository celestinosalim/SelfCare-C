import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Navigation from './Navigation';
import LandingPage from './shared/LandingPage';
import HealthResources from './shared/HealthResources';
import About from '../container/About';
import Login from '../container/Login';
import Signup from '../container/SignUp';
import UserEntries from '../container/users/UserEntries';
import UserProfile from '../container/users/UserProfile';
import Footer from './shared/Footer';
import './App.css';

class App extends Component {
  render() {
    const {isAuthenticated} = this.props

    const guestViews = (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/health_resources" component={HealthResources} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    )

    const userViews = (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/entries" component={UserEntries} />
        <Route exact path="/user_profile" component={UserProfile} />
        <Route exact path="/health_resources" component={HealthResources} />
      </div>
    )

    return (
      <Router>
        <div className="App">
          <Navigation isAuthenticated={isAuthenticated} />
          <div id="main-div">
            {isAuthenticated ? userViews : guestViews}
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser
  }
}

export default App = connect(mapStateToProps, {})(App);
