import React from 'react';
import { NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
}

const UsersNav = () =>
  <div className="navbar">
    <NavLink
      to="/entries"
      style={link}
      >Entries
    </NavLink>

    <NavLink
      to="/health_resources"
      style={link}
      >Health Resources
    </NavLink>

    <NavLink
      to="/user_profile"
      style={link}
      >Your Profile
    </NavLink>

    <NavLink
      to="#"
      style={link}
      >Account Settings
    </NavLink>

    <NavLink
      to="/"
      style={link}
      >Log Out
    </NavLink>
  </div>;

export default UsersNav
