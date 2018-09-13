import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from '../actions/authActions';

class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render () {
    const logoLink = (
      <li id="logo"><Link to="/">SelfCare</Link></li>
    )

    const mainNav = (
      <nav>
        <ul>
          {logoLink}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/health_resources">Health Resources</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    )

    const userNav = (
      <nav>
        <ul>
          {logoLink}
          <li><Link to="/entries">Entries</Link></li>
          <li><Link to="/user_profile">Profile</Link></li>
          <li onClick={(e) => this.handleLogout(e)}>Log Out</li>
        </ul>
      </nav>
    );

    return (
      <header>{this.props.isAuthenticated ? userNav : mainNav}</header>
    )
  }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));
