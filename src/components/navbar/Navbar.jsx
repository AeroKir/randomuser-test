import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Navbar.css';

function Navbar({ isUserLoggedOut }) {
  const navbar = classNames('Navbar');
  const navbarList = classNames('Navbar-list');

  const navbarRoutes = [
    {
      name: 'Home',
      key: '/',
    },
    {
      name: 'Contacts',
      key: 'contacts',
    },
  ];

  if (isUserLoggedOut) {
    return (
      <nav className={navbar}>
        <ul className={navbarList}>
          <li key="Home" className="Navbar-item">
            <span>Home</span>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className={navbar}>
      <ul className={navbarList}>
        {navbarRoutes.map((route) => (
          <li key={route.key} className="Navbar-item">
            <NavLink
              exact
              to={route.key}
              activeStyle={{
                cursor: 'auto',
                color: '#5a5a5a',
              }}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

  );
}

Navbar.propTypes = {
  isUserLoggedOut: PropTypes.bool.isRequired,
};

export default Navbar;
