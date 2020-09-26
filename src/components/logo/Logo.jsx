import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import 'antd/dist/antd.css';
import './Logo.css';
import reactLogo from '../../assets/react-logo.svg';

function Logo({ isUserLoggedOut }) {
  const logo = classNames('Logo');

  if (isUserLoggedOut) {
    return (
      <img src={reactLogo} alt="Wezom logo" className={logo} />
    );
  }

  return (
    <NavLink to="/">
      <img src={reactLogo} alt="Wezom logo" className={logo} />
    </NavLink>
  );
}

Logo.propTypes = {
  isUserLoggedOut: PropTypes.bool.isRequired,
};

export default Logo;
