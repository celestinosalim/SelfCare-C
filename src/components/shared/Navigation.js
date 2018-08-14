import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
// import { logout } from '../actions/authActions';

class Navigation extends Component {
  // handleLogout = (e) => {
  //   e.preventDefault();
  //   this.props.logout();
  //   this.props.history.push('/')
  // }

  render () {
    const logoLink = (
      <div id="logo">
        <div className="App-title">SelfCare</div>
      </div>
    )

    const mainNav = (
      <nav>
        <ul id="menu">
          <Link to="/"><li>{logoLink}</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/health_resources"><li>Health Resources</li></Link>
          <Link to="/login"><li>Log In</li></Link>
          <Link to="/signup"><li>Sign Up</li></Link>
        </ul>
      </nav>
    )

    const userNav = (
      <nav>
        <ul id="menu">
          <Link to="/"><li>{logoLink}</li></Link>
          <Link to="/entries"><li>Entries</li></Link>
          <Link to="/health_resources"><li>Health Resources</li></Link>
          <Link to="/user_profile"><li>Profile</li></Link>
          <button><li>Log Out</li></button>
          {/* <button onClick={(e) => this.handleLogout(e)} ><li>Log Out</li></button> */}
        </ul>
      </nav>
    );

    return (
      <div>{this.props.isAuthenticated ? mainNav : userNav}</div>
    )
  }
}

export default Navigation
// export default Navigation = withRouter(connect(null, {logout})(Navigation));
