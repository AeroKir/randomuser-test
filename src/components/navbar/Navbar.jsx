import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Navbar.css';

function Navbar() {
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

export default Navbar;
