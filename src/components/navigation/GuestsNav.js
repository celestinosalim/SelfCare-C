import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  // background: 'blue',
  textDecoration: 'none',
  // color: 'white',
}

class GuestsNavbar extends Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          style={link}
          >Home
        </NavLink>

        <NavLink
          to="/about"
          style={link}
          >About
        </NavLink>

        <NavLink
          to="/health_resources"
          style={link}
          >Health Resources
        </NavLink>

        <NavLink
          to="/login"
          style={link}
          >Log In
        </NavLink>

        <NavLink
          to="/signup"
          style={link}
          >Sign Up
        </NavLink>
      </div>
    )
  }
}

export default GuestsNavbar
