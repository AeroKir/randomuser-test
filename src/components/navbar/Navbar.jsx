import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Navbar.css';

function Navbar({ isUserLoggedOut, handleFetchContacts }) {
  const navbar = classNames('Navbar');
  const navbarList = classNames('Navbar-list');

  const onClickAction = () => {
    handleFetchContacts();
  };

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
        <li key="home" className="Navbar-item">
          <NavLink
            exact
            to="/"
            activeStyle={{
              cursor: 'auto',
              color: '#5a5a5a',
            }}
          >
            Home
          </NavLink>
        </li>
        <li key="contacts" className="Navbar-item">
          <NavLink
            exact
            to="/contacts"
            activeStyle={{
              cursor: 'auto',
              color: '#5a5a5a',
            }}
            onClick={onClickAction}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  isUserLoggedOut: PropTypes.bool.isRequired,
  handleFetchContacts: PropTypes.func.isRequired,
};

export default Navbar;
